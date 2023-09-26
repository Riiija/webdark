using APICrud.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APICrud.Repository
{
    interface ISalaryRepository
    {
        Task<IEnumerable<Salarie>> GetSalarie();

    }
}
