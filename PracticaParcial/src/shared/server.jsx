export async function dataFetcher(url) {
    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.error("Error al hacer fetch: ", error);
    }
}

export async function deleteData(url, id) {
    const deleteUrl = `${url}/${id}`;
    try {
        const response = await fetch(deleteUrl, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error(`Error al eliminar: ${response.status}`);
        }

        console.log('Tarea eliminada exitosamente');

        const data = await response.text();
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error("Error al eliminar la tarea: ", error);
        throw error;
    }
}

export async function putData(url, task) {
    try {
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error('Error ' + response.statusText);
        }

        const result = await response.json();
        console.log('Tarea actualizada:', result);
        return result;
    } catch (error) {
        console.error('Error al actualizar la tarea:', error);
    }
}

export async function postData(url, taskData) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(taskData)
        });

        if (!response.ok) {
            throw new Error('Error ' + response.statusText);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.log("No se pudo agregar la tarea: ", error);
    }
}