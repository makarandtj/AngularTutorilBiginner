using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OneFiberService.Model;

namespace OneFiberService.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private IIMSFTTXContext _context;

        public EmployeeController(IIMSFTTXContext dbcontext)
        {

            _context = dbcontext;
        }
        [HttpGet(Name = "api/Employee/GetEmployee")]
        public async Task<ActionResult> GetEmployee()
        {
            return Ok(await _context.Employee.ToListAsync());
        }
        [HttpGet("{id}", Name = "api/Employee/GetEmployeeById/id")]

        public async Task<ActionResult> GetEmployeeById([FromRoute]string id)
        {
            var employee = await _context.Employee.FindAsync(Convert.ToInt32(id));

            return Ok(employee);
        }

        [HttpPut("{id}", Name = "api/Employee/UpdateEmployee")]
        public async Task<IActionResult> UpdateEmployee([FromRoute]int id,  Employee Employeerequest)
        {
            var employee = await _context.Employee.FindAsync(Convert.ToInt32(id));
            if(employee == null)
            {
                return NotFound();
            }
            employee.Name = Employeerequest.Name;
              employee.Department = Employeerequest.Department;
            employee.Phone = Employeerequest.Phone;
            employee.Salary = Employeerequest.Salary;
           await  _context.SaveChangesAsync();

            return Ok(employee);
        }
        [HttpPost(Name = "api/Employee/AddEmployee")]
        public async Task<IActionResult> ADDEmployee([FromBody]Employee Employeerequest)
        {
           await  _context.Employee.AddAsync(Employeerequest);
            await _context.SaveChangesAsync();
            return Ok( Employeerequest);
        }

      
        
    }
}
