using InertiaCore.Extensions;
using ProjectName.Middleware;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews()
    .AddSessionStateTempDataProvider();

builder.Services.AddSession(options =>
{
    options.Cookie.Name = "ProjectName.Session";
    options.Cookie.HttpOnly = true;
    options.Cookie.IsEssential = true;
    options.IdleTimeout = TimeSpan.FromMinutes(30);
});
builder.Services.AddInertia();
builder.Services.AddViteHelper();

// Configure CSRF/Antiforgery protection
builder.Services.AddAntiforgery(options => options.HeaderName = "X-XSRF-TOKEN");

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
    app.UseHttpsRedirection();
}

app.UseStaticFiles();

app.UseSession();
app.UseRouting();

// Render a custom Inertia error page when an unhandled exception occurs.
var isDevelopment = app.Environment.IsDevelopment();
app.UseInertiaExceptionHandler(response =>
{
    response
        .StatusCode(500)
        .Render("Error/ServerError", new
        {
            message = isDevelopment
                ? response.Exception.Message
                : "An unexpected error occurred. Please try again later.",
            stackTrace = isDevelopment ? response.Exception.StackTrace : null,
        })
        .WithSharedData();
});

app.UseInertia();
app.UseMiddleware<ExceptionMiddleware>();
app.UseMiddleware<CsrfMiddleware>();
app.UseMiddleware<HandleInertiaRequests>();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.Run();
