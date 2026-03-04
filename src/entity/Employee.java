package entity;

import java.text.SimpleDateFormat;
import java.time.Instant;

public class Employee {
    private Long matricula;
    private String nomeEmpregado;
    private Instant dataEntradaEmpresa;

    public Employee() {
    }

    public Employee(Long matricula, String nomeEmpregado, Instant dataEntradaEmpresa) {
        this.matricula = matricula;
        this.nomeEmpregado = nomeEmpregado;
        this.dataEntradaEmpresa = dataEntradaEmpresa;
    }
    
    public Long getMatricula() {
        return matricula;
    }
    
    public void setMatricula(Long matricula) {
        this.matricula = matricula;
    }
    
    public String getNomeEmpregado() {
        return nomeEmpregado;
    }
    
    public void setNomeEmpregado(String nomeEmpregado) {
        this.nomeEmpregado = nomeEmpregado;
    }
    
    public Instant getDataEntradaEmpresa() {
        return dataEntradaEmpresa;
    }
    
    public void setDataEntradaEmpresa(Instant dataEntradaEmpresa) {
        this.dataEntradaEmpresa = dataEntradaEmpresa;
    }

    public Integer TempoTrabalho() {
        Instant time = Instant.now();
        long seconds = time.getEpochSecond() - dataEntradaEmpresa.getEpochSecond();
        return (int) (seconds / (60 * 60 * 24 * 365));
    }

    @Override
    public String toString() {
        return matricula + " - " + nomeEmpregado + " - "+ new SimpleDateFormat("dd/MM/yyyy").format(dataEntradaEmpresa.toEpochMilli());
    }
}