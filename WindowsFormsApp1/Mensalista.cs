using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TAPAula
{
    internal class Mensalista : Empregado
    {
        public Double SalarioMensal { get; set; }

        public override double SalarioBruto()
        {
            return this.SalarioMensal;
        }

        public Mensalista() {}

        public Mensalista(string nome, int matricula, DateTime dataEntradaEmpresa, double salarioMensal)
        {
            this.NomeEmpregado = nome;
            this.Matricula = matricula;
            this.DataEntradaEmpresa = dataEntradaEmpresa;
            this.SalarioMensal = salarioMensal;
        }
    }
}
