<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="Proyecto_6API_REST_0"></a>Proyecto 6-API REST</h1>
<h2 class="code-line" data-line-start=1 data-line-end=2 ><a id="Proyecto_CRUD_1"></a>Proyecto CRUD</h2>
<p class="has-line-data" data-line-start="4" data-line-end="5">Este proyecto es una API construida con Node.js y Express que se conecta a una base de datos MongoDB Atlas utilizando Mongoose. Implementa un CRUD completo para la gestión de una colección de “jeans”.</p>
<h2 class="code-line" data-line-start=6 data-line-end=7 ><a id="Requisitos_6"></a>Requisitos</h2>
<ul>
<li class="has-line-data" data-line-start="8" data-line-end="9">Node.js</li>
<li class="has-line-data" data-line-start="9" data-line-end="11">npm (Node Package Manager)</li>
</ul>
<h2 class="code-line" data-line-start=11 data-line-end=12 ><a id="Uso_11"></a>Uso</h2>
<p class="has-line-data" data-line-start="12" data-line-end="13">Para iniciar el servidor en modo de desarollo (con recarga automática):</p>
<pre><code class="has-line-data" data-line-start="14" data-line-end="16" class="language-sh">npm run dev 
</code></pre>
<p class="has-line-data" data-line-start="16" data-line-end="17">El servidor se ejecutará en <a href="http://localhost:3000">http://localhost:3000</a>.</p>
<h2 class="code-line" data-line-start=20 data-line-end=21 ><a id="Modelo_20"></a>Modelo</h2>
<h3 class="code-line" data-line-start=21 data-line-end=22 ><a id="Jean_21"></a>Jean</h3>
<pre><code class="has-line-data" data-line-start="23" data-line-end="38" class="language-sh">const mongoose = require(<span class="hljs-string">'mongoose'</span>);

const jeanSchema = new mongoose.Schema({
  description: { <span class="hljs-built_in">type</span>: String, required: <span class="hljs-literal">true</span> },
  image: { <span class="hljs-built_in">type</span>: String, required: <span class="hljs-literal">true</span> },
  price: { <span class="hljs-built_in">type</span>: Number, required: <span class="hljs-literal">true</span> },
}, {
  timestamps: <span class="hljs-literal">true</span>,
  collection: <span class="hljs-string">'jean'</span>,
});

const Jean = mongoose.model(<span class="hljs-string">'jean'</span>, jeanSchema, <span class="hljs-string">'jean'</span>);

module.exports = Jean;
</code></pre>
<h2 class="code-line" data-line-start=39 data-line-end=40 ><a id="Endpoints_39"></a>Endpoints</h2>
<h3 class="code-line" data-line-start=42 data-line-end=43 ><a id="GET_apijeans_42"></a>GET /api/jeans:</h3>
<ul>
<li class="has-line-data" data-line-start="43" data-line-end="44">Obtener todos los jeans.</li>
</ul>
<h3 class="code-line" data-line-start=44 data-line-end=45 ><a id="GET_apijeansid_44"></a>GET /api/jeans/:id:</h3>
<ul>
<li class="has-line-data" data-line-start="45" data-line-end="46">Obtener un jean por ID.</li>
</ul>
<h3 class="code-line" data-line-start=46 data-line-end=47 ><a id="POST_apijeans_46"></a>POST /api/jeans:</h3>
<ul>
<li class="has-line-data" data-line-start="47" data-line-end="49">Crear un nuevo jean.</li>
</ul>
<pre><code class="has-line-data" data-line-start="50" data-line-end="56">{
  &quot;description&quot;: &quot;Descripción del jean&quot;,
  &quot;image&quot;: &quot;URL de la imagen&quot;,
  &quot;price&quot;: 100
}
</code></pre>
<h3 class="code-line" data-line-start=56 data-line-end=57 ><a id="PUT_apijeansid_56"></a>PUT /api/jeans/:id:</h3>
<ul>
<li class="has-line-data" data-line-start="57" data-line-end="58">Actualizar un jean por ID.</li>
</ul>
<pre><code class="has-line-data" data-line-start="59" data-line-end="65">{
 &quot;description&quot;: &quot;Nueva descripción del jean&quot;,
 &quot;image&quot;: &quot;Nueva URL de la imagen&quot;,
 &quot;price&quot;: 120
}
</code></pre>
<h3 class="code-line" data-line-start=65 data-line-end=66 ><a id="DELETE_apijeansid_65"></a>DELETE /api/jeans/:id:</h3>
<ul>
<li class="has-line-data" data-line-start="66" data-line-end="68">Eliminar un jean por ID.</li>
</ul>
