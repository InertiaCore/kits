using InertiaCore;
using Microsoft.AspNetCore.Mvc;

namespace ProjectName.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CounterController : ControllerBase
    {

        [HttpGet]
        public IActionResult Get()
        {
            return Inertia.Render("Counter");
        }
    }
}
