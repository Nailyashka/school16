// preloader

window.addEventListener("load", function () {
  // Показ иконки и кругов (стрелок)
  setTimeout(() => {
    document.querySelector(".icon-site").style.opacity = 1; // Появление иконки
    document.querySelector(".circle1").style.opacity = 1;  // Появление первого круга
    document.querySelector(".circle2").style.opacity = 1;  // Появление второго круга
  }, 1000); // Появляется через 1 секунду после загрузки

  // Исчезновение иконки и кругов через 2 секунды
  setTimeout(() => {
    document.querySelector(".icon-site").style.opacity = 0; // Исчезновение иконки
    document.querySelector(".circle1").style.opacity = 0;  // Исчезновение первого круга
    document.querySelector(".circle2").style.opacity = 0;  // Исчезновение второго круга
  }, 3000); // Исчезают через 3 секунды после загрузки

  // Появление текста "ДОБРО ПОЖАЛОВАТЬ"
  setTimeout(() => {
    document.getElementById("welcome-text").style.opacity = 1; // Появление текста
  }, 4000); // Появляется через 4 секунды после загрузки

  // Исчезновение текста "ДОБРО ПОЖАЛОВАТЬ" через 4 секунды
  setTimeout(() => {
    document.getElementById("welcome-text").style.opacity = 0; // Исчезновение текста
  }, 6000); // Исчезает через 7 секунд после загрузки

  // Появление текста "СОЗДАНО НАИЕЙ УМАРОВОЙ"
  setTimeout(() => {
    document.getElementById("created-by").style.opacity = 1; // Появление текста
  }, 6500); // Появляется через 8 секунд после загрузки

  // Исчезновение текста "СОЗДАНО НАИЕЙ УМАРОВОЙ" через 4 секунды
  setTimeout(() => {
    document.getElementById("created-by").style.opacity = 0; // Исчезновение текста
  }, 8500); // Исчезает через 11 секунд после загрузки

  // Скрываем прелоадер и показываем основной контент
  setTimeout(() => {
    document.getElementById("preloader").style.display = "none";
    document.getElementById("content").style.display = "block";
    document.getElementById("content").style.opacity = "1";
    
  }, 9500); // Все элементы скрываются через 12 секунд, а контент появляется
});




// window.addEventListener("load", function () {
//   setTimeout(() => {
//     document.getElementById("preloader").style.display = "none";
//     document.getElementById("content").style.display = "block";
//     document.getElementById("content").style.opacity = "1";
//   }, 6000); // Прелоадер исчезает через 6 секунд
// });





document.querySelectorAll('.news__item').forEach(item => {
  item.addEventListener('mouseenter', () => {
    // Скрываем все блоки
    document.querySelectorAll('.news__item').forEach(otherItem => {
      otherItem.classList.remove('expanded');
    });
    // Открываем текст и увеличиваем блок только для текущего
    item.classList.add('expanded');
  });

  item.addEventListener('mouseleave', () => {
    // Убираем класс для текущего блока при убирании курсора
    item.classList.remove('expanded');
  });
});


window.addEventListener("load", function () {
  // Ждём, когда загрузится весь контент и исчезнет прелоадер
  setTimeout(() => {
    // Теперь можно работать с каруселью

    const track = document.querySelector('.carousel-track');
    const prevButton = document.querySelector('.carousel-button-left');
    const nextButton = document.querySelector('.carousel-button-right');
    const cards = document.querySelectorAll('.teacher-card');

    if (cards.length > 0 && track && prevButton && nextButton) {
      let cardWidth = cards[0].offsetWidth + 20; // Учитываем отступ в 20px
      let currentIndex = 0;

      // Функция для прокрутки
      function updateCarousel() {
        const maxIndex = cards.length - Math.floor(document.querySelector('.carousel-track-container').offsetWidth / cardWidth);
        currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
      }

      // Клик по кнопке "Влево"
      prevButton.addEventListener('click', () => {
        currentIndex--;
        updateCarousel();
      });

      // Клик по кнопке "Вправо"
      nextButton.addEventListener('click', () => {
        currentIndex++;
        updateCarousel();
      });

      // Обновление карусели при изменении размера окна
      window.addEventListener('resize', updateCarousel);

      // Запускаем обновление карусели
      updateCarousel();
    } else {
      console.error("Ошибка: Не найдены элементы для карусели.");
    }

    // Убираем прелоадер и показываем основной контент
    document.getElementById("preloader").style.display = "none";
    document.getElementById("content").style.display = "block";
    document.getElementById("content").style.opacity = "1";
  }, 9500); // Таймер для скрытия прелоадера (9,5 секунд)
});

// КНОПКА ВОПРОСА
// Получаем элементы кнопки и блока с контактами
const helpButton = document.querySelector('.help-button');
const helpPopup = document.querySelector('.help-popup');

// Добавляем событие на клик по кнопке
helpButton.addEventListener('click', () => {
  helpPopup.classList.toggle('show'); // Переключаем класс show для отображения/скрытия
});



function likeVideo() {
  const likeButton = document.querySelector('.like-button i');
  const likeCount = document.querySelector('.like-count');
  if (likeButton.classList.contains('fa-regular')) {
    likeButton.classList.remove('fa-regular');
    likeButton.classList.add('fa-solid');
    likeButton.style.color = 'pink';
    likeCount.textContent = parseInt(likeCount.textContent) + 1;
  } else {
    likeButton.classList.remove('fa-solid');
    likeButton.classList.add('fa-regular');
    likeButton.style.color = '';
    likeCount.textContent = parseInt(likeCount.textContent) - 1;
  }
}

function addComment() {
  const commentText = prompt("Напишите комментарий:");
  if (commentText) {
    const commentBubble = document.createElement('div');
    commentBubble.classList.add('comment-bubble');
    commentBubble.textContent = commentText;
    document.getElementById('commentSection').appendChild(commentBubble);

    setTimeout(() => {
      commentBubble.style.transform = 'translateY(-300px)';
      commentBubble.style.opacity = '0';
      setTimeout(() => commentBubble.remove(), 1000);
    }, 100);
  }
}

function shareVideo() {
  const videoUrl = window.location.href;
  navigator.clipboard.writeText(videoUrl);
  alert('Ссылка на видео скопирована!');
}



document.querySelectorAll('.nav-list__link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Останавливаем стандартное поведение ссылки

    const targetId = this.getAttribute('href'); // Получаем id секции
    const targetElement = document.querySelector(targetId); // Находим нужный элемент

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' }); // Плавно прокручиваем к нему
    }
  });
});

