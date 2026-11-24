class Tarea {
    constructor(tarea_id, titulo, estado_finalizacion = false) {
        this.tarea_id = tarea_id;
        this.titulo = titulo;
        this.estado_finalizacion = estado_finalizacion;
    }

    mostrar() {
        return this.titulo;
    }

    render() {
        const li = document.createElement("li");
        li.dataset.id = this.tarea_id;
        li.textContent = this.mostrar();

        if (this.estado_finalizacion) {
            li.classList.add("completada");
        }

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        li.appendChild(botonEliminar);

        return li;
    }
}

class TareaUrgente extends Tarea {
    constructor(tarea_id, titulo, prioridad = "ALTA", estado_finalizacion = false) {
        super(tarea_id, titulo, estado_finalizacion);
        const prioridadesValidas = ["ALTA", "MEDIA", "BAJA"];
        if (!prioridadesValidas.includes(prioridad)) {
            throw new TypeError("Debes introducir una prioridad válida (ALTA, MEDIA, BAJA)");
        }
        this.prioridad = prioridad;
    }

    render() {
        const li = super.render();
        li.classList.add(this.prioridad);
        return li;
    }
}

class Recordatorio extends Tarea {
    constructor(tarea_id, titulo, descripcion, estado_finalizacion = false) {
        super(tarea_id, titulo, estado_finalizacion);
        this.descripcion = descripcion;
    }

    mostrar() {
        return `${this.titulo}: ${this.descripcion}`;
    }

    get longitud() {
        return this.descripcion.length;
    }
}

class GestorTareas {
    #clave = "tareas";

    constructor(idUl) {
        this.contenedor = document.getElementById(idUl);

        // Delegación de eventos: un único listener en el <ul>
        this.contenedor.addEventListener("click", (e) => {
            const li = e.target.closest("li");
            if (!li) return;
            const id = li.dataset.id;

            if (e.target.tagName === "BUTTON") {
                this.delete(id);
            } else {
                this.#alternarEstado(id);
            }
            this.render();
        });
    }

    // ---- Métodos privados (persistencia) ----
    #leer() {
        return JSON.parse(localStorage.getItem(this.#clave)) || [];
    }

    #guardar(datos) {
        // localStorage solo guarda texto, por eso JSON.stringify
        localStorage.setItem(this.#clave, JSON.stringify(datos));
    }

    #aDatos(t) {
        return {
            tipo: t instanceof Recordatorio ? "Recordatorio"
                : t instanceof TareaUrgente ? "TareaUrgente"
                : "Tarea",
            tarea_id: String(t.tarea_id),
            titulo: t.titulo,
            descripcion: t.descripcion,
            prioridad: t.prioridad,
            estado_finalizacion: t.estado_finalizacion
        };
    }

    #aTarea(d) {
        switch (d.tipo) {
            case "Recordatorio":
                return new Recordatorio(d.tarea_id, d.titulo, d.descripcion, d.estado_finalizacion);
            case "TareaUrgente":
                return new TareaUrgente(d.tarea_id, d.titulo, d.prioridad, d.estado_finalizacion);
            default:
                return new Tarea(d.tarea_id, d.titulo, d.estado_finalizacion);
        }
    }

    #alternarEstado(id) {
        const datos = this.#leer();
        const d = datos.find(t => t.tarea_id === String(id));
        if (d) {
            d.estado_finalizacion = !d.estado_finalizacion;
            this.#guardar(datos);
        }
    }

    // ---- Métodos públicos ----
    add(tarea) {
        const datos = this.#leer();
        if (datos.some(t => t.tarea_id === String(tarea.tarea_id))) {
            throw new Error("Ya existe una tarea con ese ID");
        }
        datos.push(this.#aDatos(tarea));
        this.#guardar(datos);
    }

    getAll() {
        return this.#leer().map(d => this.#aTarea(d));
    }

    get(id) {
        const d = this.#leer().find(t => t.tarea_id === String(id));
        if (!d) {
            throw new Error("No se ha encontrado ese id");
        }
        return this.#aTarea(d);
    }

    delete(id) {
        this.#guardar(this.#leer().filter(t => t.tarea_id !== String(id)));
    }

    render() {
        this.contenedor.replaceChildren(...this.getAll().map(t => t.render()));
    }
}
