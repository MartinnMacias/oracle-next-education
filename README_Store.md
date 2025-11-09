# 📊 Análisis de Datos de Tiendas - Proyecto de Ciencia de Datos en Python

## 🧠 Descripción General

Este proyecto realiza un **análisis comparativo de datos de cuatro tiendas en línea**, con el objetivo de determinar cuál es la mejor opción para que el **Sr. João** venda sus productos.  

El análisis se centra en los siguientes aspectos:
- **Ingresos totales** por tienda.  
- **Categorías y productos más vendidos.**  
- **Evaluación de reseñas y calificaciones de los clientes.**  
- **Tiempos de envío promedio.**  

El proyecto fue desarrollado en **Google Colab** utilizando **Python, pandas y matplotlib**, con apoyo de **TextBlob** para el análisis de sentimiento.

---

## 🎯 Objetivos del proyecto

1. Analizar los datos de ventas y desempeño de cuatro tiendas (`tienda_1`, `tienda_2`, `tienda_3`, `tienda_4`).
2. Crear al menos **3 visualizaciones diferentes** que representen la información de forma clara y atractiva.
3. Generar una **recomendación final** para decidir en qué tienda debería vender el Sr. João, basándose en métricas de desempeño.

---

## 🧰 Tecnologías utilizadas

- **Python 3.x**
- **Google Colab**
- **Librerías:**
  - `pandas` — manejo y análisis de datos
  - `numpy` — cálculos numéricos
  - `matplotlib` — visualización de datos
  - `textblob` y `nltk` — análisis de sentimiento (reseñas de clientes)

---

## 📂 Estructura del proyecto

---

## 🚀 Instrucciones de Ejecución

### 1️⃣ Abrir el notebook
Abre `analisis_tiendas.ipynb` en [Google Colab](https://colab.research.google.com/).

### 2️⃣ Instalar dependencias
Ejecuta la siguiente celda antes de comenzar:

```python
!pip install textblob nltk


### 3️⃣ Cargar los datos
El proyecto carga automáticamente los CSV desde GitHub:

- [Tienda 1](https://raw.githubusercontent.com/alura-es-cursos/challenge1-data-science-latam/refs/heads/main/base-de-datos-challenge1-latam/tienda_1%20.csv)  
- [Tienda 2](https://raw.githubusercontent.com/alura-es-cursos/challenge1-data-science-latam/refs/heads/main/base-de-datos-challenge1-latam/tienda_2.csv)  
- [Tienda 3](https://raw.githubusercontent.com/alura-es-cursos/challenge1-data-science-latam/refs/heads/main/base-de-datos-challenge1-latam/tienda_3.csv)  
- [Tienda 4](https://raw.githubusercontent.com/alura-es-cursos/challenge1-data-science-latam/refs/heads/main/base-de-datos-challenge1-latam/tienda_4.csv)

También puedes sustituir las URLs si deseas usar tus propios archivos.

---

### 4️⃣ Ejecutar el notebook
Selecciona **Runtime → Run all** (Ejecutar todo) para generar todos los gráficos y métricas.

---

## 📊 Visualizaciones Generadas

Durante el análisis se crean varias gráficas para interpretar mejor los resultados:

1. **Ingresos por tienda** → gráfico de barras  
2. **Categorías más vendidas** → gráfico circular  
3. **Relación entre rating y ventas** → gráfico de dispersión  
4. **Top 10 productos más vendidos** → gráfico de barras horizontal  

Cada visualización incluye etiquetas, títulos y leyendas para mejor interpretación.

---

## 💬 Análisis de Reseñas

Se utiliza **TextBlob** para calcular la **polaridad del sentimiento** de las reseñas (valor entre -1 y 1):  
- -1 = sentimiento negativo  
- 0 = neutral  
- 1 = sentimiento positivo  

Después, se calcula el promedio del sentimiento por tienda.

---

## 🧮 Recomendación Final

Para determinar la mejor tienda, se calcula una **puntuación compuesta** considerando:


## 📁 Resultados Exportados

El notebook genera un archivo llamado:


Este archivo contiene para cada tienda:
- Ingresos totales  
- Calificación promedio  
- Tiempo promedio de envío  
- Puntaje compuesto final  

---

## ✍️ Autor

Proyecto desarrollado por **[Tu nombre aquí]**, basado en el *Challenge Data Science LATAM (Alura)*.  
Desarrollado en **Google Colab con Python 3.12**.

---

## 📄 Licencia

Este proyecto se distribuye bajo la licencia **MIT** y puede ser usado con fines educativos o de análisis de datos.
