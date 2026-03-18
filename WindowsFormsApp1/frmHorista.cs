using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using TAPAula;

namespace WindowsFormsApp1
{
    public partial class frmHorista : Form
    {
        public frmHorista()
        {
            InitializeComponent();
        }

        private void btnInstanciarHorista_Click(object sender, EventArgs e)
        {
            Horista horista = new Horista();
            horista.Matricula = Convert.ToInt32(txtMatricula.Text);
            horista.NomeEmpregado = txtNome.Text;
            horista.DataEntradaEmpresa = Convert.ToDateTime(txtDataEntradaEmpresa.Text);
            horista.SalarioHora = Convert.ToDouble(txtSalarioHoras.Text);
            horista.NumeroHora = Convert.ToDouble(txtNumeroHoras.Text);
            horista.DiasFalta = Convert.ToInt32(txtDiasFalta.Text);

            MessageBox.Show(
                "Nome : " + horista.NomeEmpregado + "\n" +
                "Matricula : " + horista.Matricula + "\n" +
                "Data Entrada Empresa : " + horista.DataEntradaEmpresa.ToShortDateString() + "\n" +
                "Salário Hora : " + horista.SalarioHora + "\n" +
                "Número Hora : " + horista.NumeroHora + "\n" +
                "Dias Falta : " + horista.DiasFalta + "\n" +
                "Salário Bruto : " + horista.SalarioBruto().ToString("N") + "\n" +
                "Tempo Trabalho : " + horista.TempoTrabalho() + " anos"
                );
        }
    }
}
