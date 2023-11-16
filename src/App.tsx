import ProfilePresentacion from "./pages/ProfilePresentacion/profile-presentacion";

function App() {
  return (
    <>
      <header>
        <nav>
          <img></img>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Portafolio</li>
            <li>Blog</li>
            <li>Contact us</li>
          </ul>
        </nav>
      </header>
      <main>
        <ProfilePresentacion/>
        <section>
          <h2>About me</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            quos culpa placeat quae. Pariatur quisquam facilis consectetur illum
            voluptas, aut quas consequuntur amet. Cumque molestias, saepe
            repudiandae accusantium quo unde.
          </p>
        </section>
        <section>
          <h2>Skills</h2>
          <ul>
            <li>Python</li>
            <li>TypeScript</li>
            <li>Ruby On Rails</li>
            <li>NodeJS</li>
            <li>ReactJs</li>
            <li>PostgresQl</li>
          </ul>
        </section>
        <section>
          <h2>Proyectos</h2>
          <div>
            <div>
              <span>Nombre del proyecto</span>
              <div>Imagen del proyecto</div>
              <a href="#">go repo</a>
              <a href="#">open project</a>
            </div>
            <div>
              <span>Nombre del proyecto</span>
              <div>Imagen del proyecto</div>
              <a href="#">go repo</a>
              <a href="#">open project</a>
            </div>
            <div>
              <span>Nombre del proyecto</span>
              <div>Imagen del proyecto</div>
              <a href="#">go repo</a>
              <a href="#">open project</a>
            </div>
            <div>
              <span>Nombre del proyecto</span>
              <div>Imagen del proyecto</div>
              <a href="#">go repo</a>
              <a href="#">open project</a>
            </div>
          </div>
        </section>
        <section>
          <h2> Contact me</h2>
          <form>
            <label>Name</label>
            <input type="text"/>
            <label>Email</label>
            <input type="text"/>
            <label>Message</label>
            <input type="text"/>
            <button>Send</button>
          </form>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
