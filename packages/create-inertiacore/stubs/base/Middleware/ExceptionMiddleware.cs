using InertiaCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Abstractions;
using Microsoft.AspNetCore.Routing;

namespace ProjectName.Middleware;

public class ExceptionMiddleware
{
    private readonly RequestDelegate _next;

    public ExceptionMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        await _next(context);

        if (context.Response.StatusCode == 404 && !context.Response.HasStarted)
        {
            await RenderNotFound(context);
        }
    }

    private static async Task RenderNotFound(HttpContext context)
    {
        context.Response.StatusCode = 404;

        var result = Inertia.Render("Error/NotFound");
        var routeData = context.GetRouteData() ?? new RouteData();
        var actionContext = new ActionContext(context, routeData, new ActionDescriptor());
        await result.ExecuteResultAsync(actionContext);
    }
}
