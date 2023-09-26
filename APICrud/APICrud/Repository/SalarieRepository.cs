using APICrud.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APICrud.Repository
{
    public class SalarieRepository : ISalaryRepository
    {
        readonly AppDbContext dbContext;

        SalarieRepository(AppDbContext dbContext) { this.dbContext = dbContext; }

        public async Task<IEnumerable<Salarie>> GetSalarie()
        {
            return await dbContext.Salaries.ToListAsync();
        }
    }
}
