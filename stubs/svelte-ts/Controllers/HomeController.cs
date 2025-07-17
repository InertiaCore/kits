using InertiaCore;
using Microsoft.AspNetCore.Mvc;

namespace ProjectName.Controllers;


[Route("/")]
public class HomeController : Controller
{
    public Task<Response> Index()
    {
        var data = new
        {
            Title = "InertiaCore + React + TailwindCSS",
            Time = DateTime.Now.ToString("HH:mm:ss"),
        };

        return Task.FromResult(Inertia.Render("Index", data));
    }
}
