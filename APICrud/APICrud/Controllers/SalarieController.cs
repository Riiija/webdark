﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace APICrud.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SalarieController : ControllerBase
    {
        public async Task<IActionResult> getSalarie()
        {
            return Ok();
        }
    }
}