function injectBody() {
    const target = document.getElementsByTagName(body)[0];
    footerWrapper = document.getElementByClass('ui-footer')[0];
    const skills = `
    <div class="ui-aside">
      <img class='gif' src='./graphics/gifs/elephant.webp' width="200" height="200" alt='dancing elephant'>
      <h1 class="ui-heading">Umki<br> albo inaczej skille</h1>

    </div>
    <div class="ui-content skills">
      <ul class='skills'>
        <li>
          <div class='bg-html'></div>
          <div class='star-container'>
            <div class='star star-golden'></div>
            <div class='star star-golden'></div>
            <div class='star star-golden'></div>
            <div class='star star-golden'></div>
            <div class='star star-grey'></div>
            <div class='star star-grey'></div>
          </div>
        </li>
        <li>
          <div class='bg-css'></div>
          <div class='star-container'>
            <div class='star star-golden'></div>
            <div class='star star-golden'></div>
            <div class='star star-golden'></div>
            <div class='star star-golden'></div>
            <div class='star star-grey'></div>
            <div class='star star-grey'></div>
          </div>
        </li>
        <li>
          <div class='bg-js'></div>
          <div class='star-container'>
            <div class='star star-golden'></div>
            <div class='star star-golden'></div>
            <div class='star star-golden'></div>
            <div class='star star-golden'></div>
            <div class='star star-grey'></div>
            <div class='star star-grey'></div>
          </div>
        </li>
        <li>
          <div class='bg-jquery'></div>
          <div class='star-container'>
            <div class='star star-golden'></div>
            <div class='star star-golden'></div>
            <div class='star star-grey'></div>
            <div class='star star-grey'></div>
            <div class='star star-grey'></div>
            <div class='star star-grey'></div>
          </div>
        </li>
        <li>
          <div class='bg-linux'></div>
          <div class='star-container'>
            <div class='star star-golden'></div>
            <div class='star star-golden'></div>
            <div class='star star-grey'></div>
            <div class='star star-grey'></div>
            <div class='star star-grey'></div>
            <div class='star star-grey'></div>
          </div>
        </li>
        <li>
          <div class='bg-react'></div>
          <div class='star-container'>
            <div class='star star-golden'></div>
            <div class='star star-golden'></div>
            <div class='star star-golden'></div>
            <div class='star star-golden'></div>
            <div class='star star-grey'></div>
            <div class='star star-grey'></div>
          </div>
          <span>Także hooksy i HOC</span>
        </li>
        <li>
          <div class='bg-redux'></div>
          <div class='star-container'>
            <div class='star star-golden'></div>
            <div class='star star-golden'></div>
            <div class='star star-golden'></div>
            <div class='star star-grey'></div>
            <div class='star star-grey'></div>
            <div class='star star-grey'></div>
          </div>
          <span>W tym Thunk. W planie Saga</span>
        </li>
        <li>
          <div class='bg-router'></div>
          <div class='star-container'>
            <div class='star star-golden'></div>
            <div class='star star-golden'></div>
            <div class='star star-grey'></div>
            <div class='star star-grey'></div>
            <div class='star star-grey'></div>
            <div class='star star-grey'></div>
          </div>
        </li>
        <li>
          <div class='bg-sql'></div>
          <div class='star-container'>
            <div class='star star-golden'></div>
            <div class='star star-grey'></div>
            <div class='star star-grey'></div>
            <div class='star star-grey'></div>
            <div class='star star-grey'></div>
            <div class='star star-grey'></div>
          </div>
        </li>
        <li>
          <div class='bg-material'></div>
          <div class='star-container'>
            <div class='star star-golden'></div>
            <div class='star star-golden'></div>
            <div class='star star-grey'></div>
            <div class='star star-grey'></div>
            <div class='star star-grey'></div>
            <div class='star star-grey'></div>
          </div>
          <span>Nie wszystkie dostępne metody modyfikacji</span>
        </li>
        <li>
          <div class='bg-php'></div>
          <div class='star-container'>
            <div class='star star-golden'></div>
            <div class='star star-grey'></div>
            <div class='star star-grey'></div>
            <div class='star star-grey'></div>
            <div class='star star-grey'></div>
            <div class='star star-grey'></div>
          </div>
          <span>Tego teraz uczę się najinstensywniej</span>
        </li>
        <li>
          <div class='bg-sass'></div>
          <div class='star-container'>
            <div class='star star-golden'></div>
            <div class='star star-golden'></div>
            <div class='star star-golden'></div>
            <div class='star star-grey'></div>
            <div class='star star-grey'></div>
            <div class='star star-grey'></div>
          </div>
        </li>
        <li>
          <div class='bg-styled'></div>
          <div class='star-container'>
            <div class='star star-golden'></div>
            <div class='star star-golden'></div>
            <div class='star star-grey'></div>
            <div class='star star-grey'></div>
            <div class='star star-grey'></div>
            <div class='star star-grey'></div>
          </div>
        </li>
        <li>
          <div class='bg-pug'></div>
          <div class='star-container'>
            <div class='star star-golden'></div>
            <div class='star star-golden'></div>
            <div class='star star-grey'></div>
            <div class='star star-grey'></div>
            <div class='star star-grey'></div>
            <div class='star star-grey'></div>
          </div>
        </li>

      </ul>
    </div>
  `
    const projects = `
    <div class="ui-aside">
      <div class='large-project__cover initial'>
        <div class='project' id='large-project-content'>
        </div>
      </div>
      <img class='gif' src='./graphics/gifs/violetgirl.gif' width="180" height="180" alt='dancing girl'>
      <h1 class="ui-heading">Projekty<br></h1>
    </div>

    <div class="ui-content" id='projects-container'>

      <div class='project project-pointer'>
        <div class='project__name pointer'>Fizjoterapia</div>
        <div class='project__image image-fizjo'></div>
        <div class='project__data initial'>
          <h2 class='project__title'>Fizjoterapia</h2>
          <div class='project__description'>Strona domowa gabinetu fizjoterapeutycznego </div>
          <div class='project__skills'><span>HTML</span><span>JS</span><span>jQuery</span><span>Greensock</span></div>
          <div class='project__links'><a href='https://kiszuriwalilibori.github.io/Fizjoterapia/'>Projekt</a><a
              href='https://github.com/Kiszuriwalilibori/Fizjoterapia'>GitHub</a></div>
        </div>
      </div>

      <div class='project project-pointer'>
        <div class='project__name pointer'>JS Books</div>
        <div class='project__image image-jsbooks'></div>
        <div class='project__data initial'>
          <h2 class='project__title'>Książki o java scripcie</h2>
          <div class='project__description'>Napisana w Vanilla JS aplikacja umożliwiająca pobieranie, sortowanie i
            filtrowanie kilku książek o JS. Zaimplementowany MVC w czystym JS bez bibliotek. Moja prawdopodobnie
            najbardziej zaawansowana a na pewno najbardziej obiektowa praca w czystym JS.</div>
          <div class='project__skills'><span>HTML</span><span>JS</span><span>MVC</span><span>Browserify</span></div>
          <div class='project__links'><a href='https://kiszuriwalilibori.github.io/JSBN/'>Projekt</a><a
              href='https://github.com/Kiszuriwalilibori/JSBN'>GitHub</a></div>
        </div>
      </div>

      <div class='project project-pointer'>
        <div class='project__name pointer'>Firebase</div>
        <div class='project__image image-firebase'></div>
        <div class='project__data initial'>
          <h2 class='project__title'>Wstęp do Firebase</h2>
          <div class='project__description'>Aplikacja umożliwia pobieranie, przegląd, modyfikację i zapis danych -
            połączona z Firebase. Do pełnej funkcjonalności użytkownik potrzebuje konta Google.</div>
          <div class='project__skills'>
            <span>React</span><span>Redux</span><span>Thunk</span><span>React-Router</span><span>Material-UI</span><span>Styled
              Components</span></div>
          <div class='project__links'><a href='https://kiszuriwalilibori.github.io/unamotest/'>Projekt</a><a
              href='https://github.com/Kiszuriwalilibori/unamotest'>Github</a></div>
        </div>
      </div>

      <div class='project project-pointer'>
        <div class='project__name pointer'>Kryptowaluty</div>
        <div class='project__image image-cryptocurrency'></div>
        <div class='project__data initial'>
          <h2 class='project__title'>Tracker kryptowalut</h2>
          <div class='project__description'>Umożliwia śledzenie zmian ceny wybranej kryptowaluty w czasie rzeczywistym.
            Odświeża notowania co 5 sekund, ponadto podaje dane historyczne.</div>
          <div class='project__skills'>
            <span>React</span><span>Redux</span><span>Thunk</span><span>React-Router</span><span>Material-UI</span><span>Axios</span><span>Styled
              Components</span></div>
          <div class='project__links'><a href='https://kiszuriwalilibori.github.io/crypto_redux_router/'>Projekt</a><a
              href='https://github.com/Kiszuriwalilibori/crypto_redux_router'>GitHub</a></div>
        </div>
      </div>

      <div class='project project-pointer'>
        <div class='project__name pointer'>Wyszukiwarka książek</div>
        <div class='project__image image-gbfinder'></div>
        <div class='project__data initial'>
          <h2 class='project__title'>Wyszukiwarka książek Google Books</h2>
          <div class='project__description'>Łączy się z API Google Books, umożliwia łatwe wyszukiwanie potrzebnych
            książek i podstawowe operacje na wynikach wyszukiwania (sortowanie, filtrowanie).</div>
          <div class='project__skills'>
            <span>React</span><span>Redux</span><span>Thunk</span><span>React-Router</span><span>Material-UI</span><span>Axios</span>
          </div>
          <div class='project__links'><a
              href='https://kiszuriwalilibori.github.io/google_books_router_redux/'>Projekt</a><a
              href='https://github.com/Kiszuriwalilibori/google_books_router_redux'>GitHub</a></div>
        </div>
      </div>

      <div class='project project-pointer'>
        <div class='project__name pointer'>Pogodynka</div>
        <div class='project__image image-pogodynka'></div>
        <div class='project__data initial'>
          <h2 class='project__title'>Pogodynka</h2>
          <div class='project__description'>Aplikacja podająca prognozę pogody dla wybranego miejsca oraz porównująca te
            dane z prognozą dla inych miejscowości</div>
          <div class='project__skills'>
            <span>React</span><span>Redux</span><span>Thunk</span><span>React-Router</span><span>Material-UI</span>
          </div>
          <div class='project__links'><a href='https://kiszuriwalilibori.github.io/pogodynka/'>Projekt</a><a
              href='https://github.com/Kiszuriwalilibori/pogodynka'>GitHub</a></div>
        </div>
      </div>

      <div class='project project-pointer'>
        <div class='project__name pointer'>Drzewo</div>
        <div class='project__image image-drzewo'></div>
        <div class='project__data initial'>
          <h2 class='project__title'>Interfejs drzewa decyzyjnego</h2>
          <div class='project__description'>Samo w sobie ma raczej ograniczone zastosowanie, ale pokazuje sposób budowy
            drzewa wyborów</div>
          <div class='project__skills'><span>React</span><span>Redux</span><span>Thunk</span><span>Material-UI</span>
          </div>
          <div class='project__links'><a href='https://kiszuriwalilibori.github.io/hype4mobile/'>Projekt</a><a
              href='https://github.com/Kiszuriwalilibori/hype4mobile'>GitHub</a></div>
        </div>
      </div>

      <div class='project project-pointer'>
        <div class='project__name pointer'>Ukryty potencjał</div>
        <div class='project__image image-athletes'></div>
        <div class='project__data initial'>
          <h2 class='project__title'>Ukryty potencjał sportowców</h2>
          <div class='project__description'>Źródło zaskakujących analiz o nieznanym potencjale powszechnie znanych
            gwiazd sportu. </div>
          <div class='project__skills'><span>React</span><span>HTML</span><span>JS</span></div>
          <div class='project__links'><a href='https://kiszuriwalilibori.github.io/Athletes/'>Projekt</a><a
              href='https://github.com/Kiszuriwalilibori/Athletes'>GitHub</a></div>
        </div>
      </div>


      <div class='project project-pointer'>
        <div class='project__name pointer'>Archiwalne portfolio 1</div>
        <div class='project__image image-arch1'></div>
        <div class='project__data initial'>
          <h2 class='project__title'>Archiwalne portfolio 1</h2>
          <div class='project__description'>Stara nieutrzymywana wersja portfolio, może zawierać martwe linki.</div>
          <div class='project__skills'><span>HTML</span><span>CSS</span><span>JS</span></div>
          <div class='project__links'><a
              href='https://kiszuriwalilibori.github.io/Portfolio_Archiwalne_1/'>Projekt</a><a
              href='https://github.com/Kiszuriwalilibori/Portfolio_Archiwalne_1'>GitHub</a></div>
        </div>
      </div>

      <div class='project project-pointer'>
        <div class='project__name pointer'>Archiwalne portfolio 2</div>
        <div class='project__image image-arch2'></div>
        <div class='project__data initial'>
          <h2 class='project__title'>Archiwalne portfolio 2</h2>
          <div class='project__description'>Stara nieutrzymywana wersja portfolio, może zawierać martwe linki.</div>
          <div class='project__skills'><span>HTML</span><span>CSS</span><span>JS</span><span>PUG</span></div>
          <div class='project__links'><a
              href='https://kiszuriwalilibori.github.io/Portfolio_Archiwalne_2/'>Projekt</a><a
              href='https://github.com/Kiszuriwalilibori/Portfolio_Archiwalne_2'>GitHub</a></div>
        </div>
      </div>
      <div class='project project-pointer'>
        <div class='project__name pointer'>Te portfolio</div>
        <div class='project__image image-arch2'></div>
        <div class='project__data initial'>
          <h2 class='project__title'>Te portfolio</h2>
          <div class='project__description'>Aktualna wersja portfolio, wyłącznie dla łatwiejszego przejścia do githuba.
          </div>
          <div class='project__skills'><span>HTML</span><span>CSS</span><span>JS</span><span>PUG</span></div>
          <div class='project__links'><a href='https://kiszuriwalilibori.github.io/portfolio/'>Projekt</a><a
              href='https://github.com/Kiszuriwalilibori/portfolio'>GitHub</a></div>
        </div>
      </div>
    </div>
  `
    const footer =
        `<img class='gif gif-footer' src='../graphics/gifs/dancer.gif'>
    <strong>
      <p>Created by Piotr Maksymiuk.</p>
    </strong>
  </footer>`

    footerWrapper.innerHTML = footer;
}