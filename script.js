// Biodata Tenaga Pendidik
const biodataGuru = {
    "Mila Kartika Sari": {
        nama: "Mila Kartika Sari, S.Pd., M.Pd",
        unit_kerja: "SD Negeri Gayam 05 Kec. Sukoharjo",
        jabatan: "Kepala Sekolah",
        alamat: "Jl. Serang RT 02/ RW 01 Jogobayan Gayam Sukoharjo",
        no_hp: "087736402411",
        email: "mitothela@gmail.com"
    },
    "Ratih Windi Tri": {
        nama: "Ratih Windi Tri Hastutik, S.Pd",
        tempat_tanggal_lahir: "Sukoharjo, 28 Oktober 1994",
        alamat: "Jimbun RT.002 / Rw. 004 Pondok, Nguter",
        unit_kerja: "SD Negeri Gayam 05",
        jabatan: "Guru Kelas",
        no_hp: "085642231390",
        email: "ratihwindi28@gmail.com"
    },
    "Siti Chosyatun": {
        nama: "Siti Chosyatun, S.Pd",
        tempat_tanggal_lahir: "Sukoharjo, 14 Oktober 1985",
        unit_kerja: "SD Negeri Gayam 05 Kec. Sukoharjo",
        jabatan: "Guru",
        alamat: "Sanggrahan RT 01 RW 05 Joho, Sukoharjo",
        no_hp: "087712362785",
        email: "sitichosyatun1985@gmail.com"
    },
    "Indah Ayu Marga": {
        nama: "Indah Ayu Marga Utami, S.Pd",
        tempat_tanggal_lahir: "Sukoharjo, 18 Maret 1995",
        alamat: "Sugihan RT.01/RW.01, Sugihan, Kec. Bendosari, Kab. Sukoharjo",
        no_hp: "085727749692",
        email: "indahayumargautami@gmail.com",
        unit_kerja: "SD Negeri Gayam 05 Kec. Sukoharjo"
    },
    "Yandra Dwi Yuliani": {
        nama: "Yandra Dwi Yuliani, S.Pd",
        tempat_lahir: "Sukoharjo, Jawa Tengah",
        tanggal_lahir: "29 Juli 1994",
        alamat: "Walang RT 002/ RW 002, Jombor, Bendosari, Sukoharjo",
        no_hp: "085647538990",
        instansi: "SD Negeri Gayam 05"
    },
    "Zuyyina Fadhila": {
        nama: "Zuyyina Fadhila Muhtari",
        unit_kerja: "SD Negeri Gayam 05",
        jabatan: "Guru Kelas",
        hobi: "Kulineran dan Jalan kaki",
        band_fav: "Day6",
        makanan_fav: "Bakso, buah, sup tahu telur (my comfort fewd), ramen, dll",
        email: "zuyyinafmuhtari@gmail.com"
    },
    "Okfi Pusvitasari": {
        nama: "OKFI PUSVITASARI, S.Pd",
        unit_kerja: "SD NEGERI GAYAM 05",
        jabatan: "GURU KELAS",
        alamat: "DK. KENEP RT 02/ RW 05, KEL. KENEP KEC/KAB. SUKOHARJO",
        no_hp: "087889323627",
        email: "Okfigayam@gmail.com"
    },
    "Nurrohmah Widiyastuti": {
        nama: "Nurrohmah Widiyastuti, S.Pd.I",
        tempat_tanggal_lahir: "Sukoharjo, 22 November 1981",
        alamat: "Bondalem, Rt.03/Rw.10, Gayam, Sukoharjo",
        unit_kerja: "SD Negeri Gayam 05",
        jabatan: "Guru Mapel PAI",
        no_hp: "081228707098",
        email: "nurwidiyas81@gmail.com"
    },
    "Nia Febrihastuti": {
        nama: "Nia Febrihastuti, A.Md.Li",
        unit_kerja: "SD Negeri Gayam 05"
    }
};

function showBiodata(key) {
    const data = biodataGuru[key];
    if (!data) return;

    let content = '<div class="text-start">';
    for (const [label, value] of Object.entries(data)) {
        const formattedLabel = label.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        content += `<p class="mb-2"><strong>${formattedLabel}:</strong> ${value}</p>`;
    }
    content += '</div>';

    // Check if modal exists, if not create it
    let modalElement = document.getElementById('biodataModal');
    if (!modalElement) {
        const modalHtml = `
            <div class="modal fade" id="biodataModal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header bg-primary text-white">
                            <h5 class="modal-title">Biodata Tenaga Pendidik</h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body" id="biodataModalBody">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
                        </div>
                    </div>
                </div>
            </div>`;
        document.body.insertAdjacentHTML('beforeend', modalHtml);
        modalElement = document.getElementById('biodataModal');
    }

    document.getElementById('biodataModalBody').innerHTML = content;
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
}

function initBiodataClicks() {
    // Add click event listeners to teacher cards/items
    const teacherItems = document.querySelectorAll('.org-card, .principal-photo');
    teacherItems.forEach(item => {
        item.style.cursor = 'pointer';
        
        item.addEventListener('click', () => {
            const nameElement = item.querySelector('h5, h6');
            if (nameElement) {
                const fullName = nameElement.innerText;
                // Try to find matching key
                const key = Object.keys(biodataGuru).find(k => fullName.includes(k));
                if (key) {
                    showBiodata(key);
                }
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Website SDN GAYAM 5 SUKOHARJO loaded successfully!');
    
    // Initialize all features
    initCarousel();
    initNewsFilter();
    initGalleryFilter();
    initForms();
    initScrollAnimations();
    initSmoothScroll();
    initBiodataClicks();
});

// Navbar Active
    // Dapatkan nama file halaman saat ini (misal: profil.html)
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Dapatkan semua link navbar
    const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');

        navbarLinks.forEach(link => {
        const href = link.getAttribute('href');

        // Jangan hapus class di link PPDB, biar tetap kuning dan bold
        if (href === 'ppdb.html') {
            link.classList.add('fw-bold', 'text-warning');
            // Jangan sentuh active class di PPDB
            link.classList.remove('active'); 
            return;
        }

        // Hapus class active di link selain PPDB
        link.classList.remove('active');

        // Tambahkan active di link yang href-nya sama dengan halaman sekarang
        if (href === currentPage) {
            link.classList.add('active');
        }
    });
    
// Carousel Auto-play
function initCarousel() {
    const carousel = document.querySelector('#heroCarousel');
    if (carousel) {
        const bsCarousel = new bootstrap.Carousel(carousel, {
            interval: 5000,
            wrap: true
        });
    }
}

// News Filter
function initNewsFilter() {
    const filterButtons = document.querySelectorAll('[data-filter]');
    const newsItems = document.querySelectorAll('[data-category]');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.classList.add('btn-outline-primary');
                btn.classList.remove('btn-primary');
            });
            this.classList.add('active');
            this.classList.remove('btn-outline-primary');
            this.classList.add('btn-primary');
            
            // Filter news items
            newsItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s ease-in-out';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Gallery Filter
function initGalleryFilter() {
    const albumButtons = document.querySelectorAll('[data-album]');
    const galleryItems = document.querySelectorAll('#galleryContainer [data-category]');
    
    albumButtons.forEach(button => {
        button.addEventListener('click', function() {
            const album = this.getAttribute('data-album');
            
            // Update active button
            albumButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.classList.add('btn-outline-primary');
                btn.classList.remove('btn-primary');
            });
            this.classList.add('active');
            this.classList.remove('btn-outline-primary');
            this.classList.add('btn-primary');
            
            // Filter gallery items
            galleryItems.forEach(item => {
                if (album === 'all' || item.getAttribute('data-category') === album) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s ease-in-out';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Form Handling
function initForms() {
    // PPDB Form
    const ppdbForm = document.getElementById('ppdbForm');
    if (ppdbForm) {
        ppdbForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate form
            if (this.checkValidity()) {
                // Get form data
                const formData = {
                    namaLengkap: document.getElementById('namaLengkap').value,
                    nikSiswa: document.getElementById('nikSiswa').value,
                    tempatLahir: document.getElementById('tempatLahir').value,
                    tanggalLahir: document.getElementById('tanggalLahir').value,
                    jenisKelamin: document.getElementById('jenisKelamin').value,
                    agama: document.getElementById('agama').value,
                    alamat: document.getElementById('alamat').value,
                    rt: document.getElementById('rt').value,
                    rw: document.getElementById('rw').value,
                    kelurahan: document.getElementById('kelurahan').value,
                    kecamatan: document.getElementById('kecamatan').value,
                    namaAyah: document.getElementById('namaAyah').value,
                    pekerjaanAyah: document.getElementById('pekerjaanAyah').value,
                    namaIbu: document.getElementById('namaIbu').value,
                    pekerjaanIbu: document.getElementById('pekerjaanIbu').value,
                    noTelepon: document.getElementById('noTelepon').value,
                    email: document.getElementById('email').value,
                    jalurPendaftaran: document.getElementById('jalurPendaftaran').value,
                    keterangan: document.getElementById('keterangan').value
                };
                
                // Store in localStorage
                const registrations = JSON.parse(localStorage.getItem('ppdbRegistrations') || '[]');
                registrations.push({
                    ...formData,
                    timestamp: new Date().toISOString(),
                    id: 'REG-' + Date.now()
                });
                localStorage.setItem('ppdbRegistrations', JSON.stringify(registrations));
                
                // Show success message
                alert('Pendaftaran berhasil dikirim! Nomor registrasi Anda: REG-' + Date.now() + '\n\nSilakan datang ke sekolah untuk verifikasi berkas sesuai jadwal yang telah ditentukan.');
                
                // Reset form
                this.reset();
            } else {
                alert('Mohon lengkapi semua field yang wajib diisi!');
            }
        });
    }
    
    // Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (this.checkValidity()) {
                const formData = {
                    nama: document.getElementById('nama').value,
                    email: document.getElementById('emailKontak').value,
                    telepon: document.getElementById('telepon').value,
                    subjek: document.getElementById('subjek').value,
                    pesan: document.getElementById('pesan').value
                };
                
                // Store in localStorage
                const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
                messages.push({
                    ...formData,
                    timestamp: new Date().toISOString(),
                    id: 'MSG-' + Date.now()
                });
                localStorage.setItem('contactMessages', JSON.stringify(messages));
                
                // Show success message
                alert('Pesan Anda berhasil dikirim! Kami akan segera menghubungi Anda.');
                
                // Reset form
                this.reset();
            } else {
                alert('Mohon lengkapi semua field yang wajib diisi!');
            }
        });
    }
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.5s ease-in-out';
                entry.target.style.opacity = '1';
            }
        });
    }, observerOptions);
    
    // Observe all cards and gallery items
    document.querySelectorAll('.card, .gallery-item').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

// Smooth Scroll for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#imageModal') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Search functionality for news
const searchInput = document.querySelector('input[placeholder="Cari berita..."]');
if (searchInput) {
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const newsItems = document.querySelectorAll('#newsContainer .card');
        
        newsItems.forEach(item => {
            const title = item.querySelector('.card-title').textContent.toLowerCase();
            const content = item.querySelector('.card-text').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || content.includes(searchTerm)) {
                item.parentElement.style.display = 'block';
            } else {
                item.parentElement.style.display = 'none';
            }
        });
    });
}

// Back to top button (optional enhancement)
function createBackToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '<i class="bi bi-arrow-up"></i>';
    button.className = 'btn btn-primary position-fixed bottom-0 end-0 m-4';
    button.style.display = 'none';
    button.style.zIndex = '1000';
    button.style.borderRadius = '50%';
    button.style.width = '50px';
    button.style.height = '50px';
    
    button.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });
    
    document.body.appendChild(button);
}

// Initialize back to top button
createBackToTopButton();

// Form validation helper
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[0-9]{10,13}$/;
    return re.test(phone.replace(/[\s-]/g, ''));
}

// Age calculation for PPDB
function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    
    return age;
}

// Check age when date is selected in PPDB form
const tanggalLahirInput = document.getElementById('tanggalLahir');
if (tanggalLahirInput) {
    tanggalLahirInput.addEventListener('change', function() {
        const age = calculateAge(this.value);
        if (age < 6) {
            alert('Perhatian: Calon siswa harus berusia minimal 6 tahun pada tanggal 1 Juli 2024.');
        }
    });
}

console.log('All scripts initialized successfully!');