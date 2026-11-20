class Tarea{
    tarea_id;
    titulo;
    estado_finalizacion;

    constructor(tarea_id,titulo,estado_finalizacion = false){
        this.tarea_id = tarea_id,
        this.titulo = titulo,
        this.estado_finalizacion = estado_finalizacion
    }
    mostrar(){
        return this.titulo
    }
}

class TareaUrgente extends Tarea{
    prioridad ;
    constructor(tarea_id,titulo,prioridad = "ALTA"){
        const prioridadesValidas = ["ALTA", "MEDIA", "BAJA"]
        super(tarea_id,titulo)
        if (!prioridadesValidas.includes(prioridad)){
            throw new TypeError("Debes introducir una prioridad válida (ALTA,MEDIA,BAJA")
        }
        this.prioridad = prioridad
        }
    }

class Recordatorio extends Tarea{
    descripcion;
    constructor(tarea_id,titulo,descripcion){
        super(tarea_id,titulo)
        this.descripcion = descripcion
    }
    

}