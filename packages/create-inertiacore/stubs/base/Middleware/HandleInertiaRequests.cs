using InertiaCore;
using Microsoft.AspNetCore.Mvc.ViewFeatures;

namespace ProjectName.Middleware;

public class HandleInertiaRequests
{
    private readonly RequestDelegate _next;

    public HandleInertiaRequests(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        Inertia.Share("flash", () =>
        {
            var factory = context.RequestServices.GetRequiredService<ITempDataDictionaryFactory>();
            var tempData = factory.GetTempData(context);
            var flash = new Dictionary<string, object>();
            if (tempData.TryGetValue("flash.error", out var error) && error is not null)
            {
                flash.Add("error", error);
            }
            if (tempData.TryGetValue("flash.success", out var success) && success is not null)
            {
                flash.Add("success", success);
            }
            return flash;
        });

        await _next(context);
    }
}
