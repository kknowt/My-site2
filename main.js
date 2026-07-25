/**
 * Данные портфолио — файлы из Google Drive (папка «Мої работи»)
 */
const PORTFOLIO = {
  magazines: {
    title: 'Журналы',
    items: [
      { id: 'mag-hort', title: 'Текст рыба', description: 'PDF-публикация', file: 'assets/magazines/hort.pdf', thumb: null },
      { id: 'mag-r', title: 'Текст рыба', description: 'PDF-публикация', file: 'assets/magazines/r.pdf', thumb: null },
      { id: 'mag-prezentachiya-al', title: 'Ювелирка', description: 'журнал', file: 'assets/magazines/prezentachiya-al.pdf', thumb: null },
      { id: 'mag-veloria', title: 'Veloria косметкиа', description: 'бренд', file: 'assets/magazines/veloria-prezentation.pdf', thumb: null }
    ]
  },

  videos: {
    title: 'Видео',
    items: [
      { id: 'vid-render', title: 'Ретро', description: 'Видеоролик', file: 'assets/videos/render.mp4', thumb: null },
      { id: 'vid-earth', title: 'Earth', description: 'Видеоролик', file: 'assets/videos/earth.mp4', thumb: null },
      { id: 'vid-bycle', title: 'Bycle', description: 'Видеоролик', file: 'assets/videos/bycle.mp4', thumb: null },
      { id: 'vid-avia', title: 'Авиа', description: 'Видеоролик', file: 'assets/videos/avia-not-fully.mp4', thumb: null }
    ]
  },

  works: {
    title: 'Векторные и растровые работы',
    items: [
      { id: 'work-arina-kursovaya-zakaz', title: 'Arina Kursovaya Zakaz', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/arina-kursovaya-zakaz.pdf', thumb: null, type: 'vector' },
      { id: 'work-boyko-kirill-compressed', title: 'Лира шоколад', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/boyko-kirill-compressed.pdf', thumb: null, type: 'vector' },
      { id: 'work-brosh', title: 'Brosh', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/brosh.pdf', thumb: null, type: 'vector' },
      { id: 'work-fabryka-logotyp', title: 'Рандом лого', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/fabryka-logotyp.pdf', thumb: null, type: 'vector' },
      { id: 'work-fashion', title: 'Fashion ребрендинг', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/fashion.pdf', thumb: null, type: 'vector' },
      { id: 'work-fastway', title: 'Fastway лого', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/fastway.pdf', thumb: null, type: 'vector' },
      { id: 'work-insomnia-kreativ', title: 'Инсомния', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/insomnia-kreativ.pdf', thumb: null, type: 'vector' },
      { id: 'work-izometriya', title: 'Изометрия', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/izometriya.pdf', thumb: null, type: 'vector' },
      { id: 'work-kontrastna-metodyka', title: 'Градиент', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/kontrastna-metodyka.pdf', thumb: null, type: 'vector' },
      { id: 'work-lighthouse', title: 'Маяк', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/lighthouse.jpg', thumb: 'assets/works/lighthouse.jpg', type: 'raster' },
      { id: 'work-perekhid-grafika', title: 'Градиент (поломанный)', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/perekhid-grafika.pdf', thumb: null, type: 'vector' },
      { id: 'work-pixel-art', title: 'Pixel Art', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/pixel-art.pdf', thumb: null, type: 'vector' },
      { id: 'work-polozhennya-komunikatsiya', title: 'Бусик тцк', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/polozhennya-komunikatsiya.jpg', thumb: 'assets/works/polozhennya-komunikatsiya.jpg', type: 'raster' },
      { id: 'work-pomusic', title: 'Popmusic', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/pomusic.pdf', thumb: null, type: 'vector' },
      { id: 'work-portret-1', title: 'Пустыня 1', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/portret-1.pdf', thumb: null, type: 'vector' },
      { id: 'work-portret-2', title: 'Пустыня 2', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/portret-2.pdf', thumb: null, type: 'vector' },
      { id: 'work-skyjoy-poster', title: 'Skyjoy заготовки', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/skyjoy-poster.pdf', thumb: null, type: 'vector' },
      { id: 'work-telefon', title: 'Календарь', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/telefon.pdf', thumb: null, type: 'vector' },
      { id: 'work-work-1-rh-ugu', title: 'Мокап roses', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/work-1_Rh_uGu.jpg', thumb: 'assets/works/work-1_Rh_uGu.jpg', type: 'raster' },
      { id: 'work-work-1c8k0zyx', title: 'Мокап sandalwood2', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/work-1C8K0zYx.jpg', thumb: 'assets/works/work-1C8K0zYx.jpg', type: 'raster' },
      { id: 'work-work-1esqzhmj', title: 'Aurabloom', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/work-1esQZHMJ.pdf', thumb: null, type: 'vector' },
      { id: 'work-work-1fsdiscf', title: 'Постер розы', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/work-1FsdIscf.jpg', thumb: 'assets/works/work-1FsdIscf.jpg', type: 'raster' },
      { id: 'work-work-1gd3vaen', title: 'Мокап sandalwood', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/work-1gD3vAEn.jpg', thumb: 'assets/works/work-1gD3vAEn.jpg', type: 'raster' },
      { id: 'work-work-1k-yuseb', title: 'Ретушь девушки', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/work-1k_yusEb.jpg', thumb: 'assets/works/work-1k_yusEb.jpg', type: 'raster' },
      { id: 'work-work-1um13b4y', title: 'Ручной мокап', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/work-1um13B4Y.jpg', thumb: 'assets/works/work-1um13B4Y.jpg', type: 'raster' },
      { id: 'work-work-1upztodc', title: 'Постер pineapple', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/work-1uPZtoDc.jpg', thumb: 'assets/works/work-1uPZtoDc.jpg', type: 'raster' },
      { id: 'work-work-1utze3fv', title: 'Постер sandalwood', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/work-1utZe3fv.jpg', thumb: 'assets/works/work-1utZe3fv.jpg', type: 'raster' },
      { id: 'work-work-1v0xvap9', title: 'Мокап pina colada', description: '\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0430\u0431\u043e\u0442\u0430', file: 'assets/works/work-1v0xvAP9.jpg', thumb: 'assets/works/work-1v0xvAP9.jpg', type: 'raster' },
    ]
  }
};
(function () {
  const views = {
    welcome: document.getElementById('welcome'),
    categories: document.getElementById('categories'),
    gallery: document.getElementById('gallery')
  };

  const galleryTitle = document.getElementById('gallery-title');
  const galleryGrid = document.getElementById('gallery-grid');

  const videoModal = document.getElementById('video-modal');
  const videoPlayer = document.getElementById('video-player');
  const videoTitle = document.getElementById('video-title');
  const videoWrapper = videoPlayer.closest('.video-wrapper');

  const pdfModal = document.getElementById('pdf-modal');
  const pdfViewer = document.getElementById('pdf-viewer');
  const pdfTitle = document.getElementById('pdf-title');

  const imageModal = document.getElementById('image-modal');
  const imageViewer = document.getElementById('image-viewer');
  const imageTitle = document.getElementById('image-title');
  const imageWrapper = imageViewer.closest('.image-wrapper');

  let currentView = 'welcome';
  let currentCategory = null;

  function sizeMediaFrame(wrapper, mediaW, mediaH) {
    if (!mediaW || !mediaH) return;

    const ratio = mediaW / mediaH;
    const maxW = Math.min(window.innerWidth * 0.9, 920);
    const maxH = window.innerHeight * 0.78 - 72;

    let width;
    let height;

    if (ratio >= maxW / maxH) {
      width = maxW;
      height = width / ratio;
    } else {
      height = maxH;
      width = height * ratio;
    }

    wrapper.style.width = `${Math.round(width)}px`;
    wrapper.style.height = `${Math.round(height)}px`;
    wrapper.style.aspectRatio = `${mediaW} / ${mediaH}`;
  }

  function resetMediaFrame(wrapper) {
    wrapper.style.width = '';
    wrapper.style.height = '';
    wrapper.style.aspectRatio = '';
  }

  function navigateTo(viewName) {
    if (viewName === currentView) return;

    const from = views[currentView];
    const to = views[viewName];

    from.classList.add('view-exit');
    from.classList.remove('view-active');

    setTimeout(() => {
      from.classList.remove('view-exit');
      to.classList.add('view-active');
      currentView = viewName;
    }, 300);
  }

  function openCategory(categoryKey) {
    const category = PORTFOLIO[categoryKey];
    if (!category) return;

    currentCategory = categoryKey;
    galleryTitle.textContent = category.title;
    renderGallery(category, categoryKey);
    navigateTo('gallery');
  }

  function renderGallery(category, categoryKey) {
    galleryGrid.innerHTML = '';

    if (!category.items.length) {
      galleryGrid.innerHTML = `
        <div class="empty-state glass-card">
          <p>Пока нет работ в этой категории.<br>Добавьте файлы в папку assets/ и обновите main.js</p>
        </div>`;
      return;
    }

    category.items.forEach((item) => {
      const el = document.createElement('article');
      el.className = 'gallery-item';
      el.dataset.id = item.id;

      let thumbClass = '';
      let thumbContent = '';

      if (categoryKey === 'magazines') {
        thumbClass = 'pdf-thumb';
        thumbContent = '📄';
        if (item.thumb) {
          thumbContent = `<img src="${item.thumb}" alt="${item.title}">`;
        }
      } else if (categoryKey === 'videos') {
        thumbClass = 'video-thumb';
        thumbContent = '▶';
        if (item.thumb) {
          thumbContent = `<img src="${item.thumb}" alt="${item.title}">`;
        }
      } else {
        if (item.thumb) {
          thumbContent = `<img src="${item.thumb}" alt="${item.title}">`;
        } else {
          thumbContent = item.type === 'vector' ? '✦' : '🖼';
        }
      }

      el.innerHTML = `
        <div class="gallery-thumb ${thumbClass}">${thumbContent}</div>
        <div class="gallery-info">
          <h4>${item.title}</h4>
          <p>${item.description || ''}</p>
        </div>`;

      el.addEventListener('click', () => openItem(item, categoryKey));
      galleryGrid.appendChild(el);
    });
  }

  function openVideo(item) {
    videoTitle.textContent = item.title;
    resetMediaFrame(videoWrapper);
    videoPlayer.src = item.file;

    const applySize = () => {
      sizeMediaFrame(videoWrapper, videoPlayer.videoWidth, videoPlayer.videoHeight);
    };

    videoPlayer.onloadedmetadata = applySize;
    videoModal.showModal();
    videoPlayer.load();
    videoPlayer.play().catch(() => {});

    if (videoPlayer.readyState >= 1) applySize();
  }

  function openImage(item) {
    imageTitle.textContent = item.title;
    imageViewer.alt = item.title;
    resetMediaFrame(imageWrapper);

    const applySize = () => {
      sizeMediaFrame(imageWrapper, imageViewer.naturalWidth, imageViewer.naturalHeight);
    };

    imageViewer.onload = applySize;
    imageViewer.src = item.file;
    imageModal.showModal();

    if (imageViewer.complete && imageViewer.naturalWidth) applySize();
  }

  function openItem(item, categoryKey) {
    if (categoryKey === 'videos') {
      openVideo(item);
    } else if (categoryKey === 'magazines') {
      pdfTitle.textContent = item.title;
      pdfViewer.src = item.file;
      pdfModal.showModal();
    } else {
      const ext = item.file.split('.').pop().toLowerCase();
      if (ext === 'pdf') {
        pdfTitle.textContent = item.title;
        pdfViewer.src = item.file;
        pdfModal.showModal();
      } else {
        openImage(item);
      }
    }
  }

  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.close();

    if (modalId === 'video-modal') {
      videoPlayer.pause();
      videoPlayer.onloadedmetadata = null;
      videoPlayer.removeAttribute('src');
      videoPlayer.load();
      resetMediaFrame(videoWrapper);
    } else if (modalId === 'pdf-modal') {
      pdfViewer.removeAttribute('src');
    } else if (modalId === 'image-modal') {
      imageViewer.onload = null;
      imageViewer.removeAttribute('src');
      resetMediaFrame(imageWrapper);
    }
  }

  window.addEventListener('resize', () => {
    if (videoModal.open && videoPlayer.videoWidth) {
      sizeMediaFrame(videoWrapper, videoPlayer.videoWidth, videoPlayer.videoHeight);
    }
    if (imageModal.open && imageViewer.naturalWidth) {
      sizeMediaFrame(imageWrapper, imageViewer.naturalWidth, imageViewer.naturalHeight);
    }
  });

  document.querySelectorAll('[data-nav]').forEach((btn) => {
    btn.addEventListener('click', () => navigateTo(btn.dataset.nav));
  });

  document.querySelectorAll('.category-card').forEach((card) => {
    card.addEventListener('click', () => openCategory(card.dataset.category));
  });

  document.querySelectorAll('[data-close]').forEach((btn) => {
    btn.addEventListener('click', () => closeModal(btn.dataset.close));
  });

  [videoModal, pdfModal, imageModal].forEach((modal) => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal(modal.id);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      [videoModal, pdfModal, imageModal].forEach((modal) => {
        if (modal.open) closeModal(modal.id);
      });
    }
  });
})();
