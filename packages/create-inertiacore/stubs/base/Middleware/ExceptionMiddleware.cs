using InertiaCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Abstractions;
using Microsoft.AspNetCore.Routing;

namespace ProjectName.Middleware;

public class ExceptionMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger<ExceptionMiddleware> _logger;
    private readonly IWebHostEnvironment _env;

    public ExceptionMiddleware(
        RequestDelegate next,
        ILogger<ExceptionMiddleware> logger,
        IWebHostEnvironment env)
    {
        _next = next;
        _logger = logger;
        _env = env;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        try
        {
            await _next(context);

            // Handle 404s
            if (context.Response.StatusCode == 404 && !context.Response.HasStarted)
            {
                await RenderNotFound(context);
            }
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "An unhandled exception occurred");
            await HandleExceptionAsync(context, ex);
        }
    }

    private async Task HandleExceptionAsync(HttpContext context, Exception exception)
    {
        if (context.Response.HasStarted)
        {
            _logger.LogWarning("Response has already started, cannot render error page");
            throw exception;
        }

        context.Response.StatusCode = 500;

        var errorData = new
        {
            message = _env.IsDevelopment()
                ? exception.Message
                : "An unexpected error occurred",
            stackTrace = _env.IsDevelopment() ? exception.StackTrace : null
        };

        var result = Inertia.Render("Error/ServerError", errorData);
        await result.ExecuteResultAsync(GetActionContext(context));
    }

    private async Task RenderNotFound(HttpContext context)
    {
        context.Response.StatusCode = 404;

        var result = Inertia.Render("Error/NotFound");
        await result.ExecuteResultAsync(GetActionContext(context));
    }

    private static ActionContext GetActionContext(HttpContext context)
    {
        var routeData = context.GetRouteData() ?? new RouteData();
        var actionDescriptor = new ActionDescriptor();
        return new ActionContext(context, routeData, actionDescriptor);
    }
}
