document.querySelectorAll('.prodi-card').forEach(card => {
    card.addEventListener('click', function () {

        // Tutup semua card lain
        document.querySelectorAll('.prodi-card').forEach(c => {
            if (c !== card) c.classList.remove('active');
        });

        // Toggle card yang diklik
        card.classList.toggle('active');
    });
});




const carousel = document.querySelector(".brosur-carousel");
const items = document.querySelectorAll(".brosur-item");

let index = 0;

document.querySelector(".arrow.right").onclick = () => {
  index = (index + 1) % items.length;
  carousel.style.transform = `translateX(${-index * 100}%)`;
};

document.querySelector(".arrow.left").onclick = () => {
  index = (index - 1 + items.length) % items.length;
  carousel.style.transform = `translateX(${-index * 100}%)`;
};



// Data untuk setiap kegiatan (termasuk gambar)
    const kegiatanData = {
        1: {
            title: "Workshop Career",
            desc: "Kegiatan pengembangan diri yang membantu peserta mengenal potensi, mempersiapkan diri memasuki dunia kerja, serta memahami strategi dalam meraih karier yang diinginkan.",
            img: "pict/kegiatan/1.1.jpg"
        },
        2: {
            title: "Company Visit",
            desc: "Kegiatan kunjungan industri yang memberi peserta pengalaman langsung melihat proses kerja di perusahaan dan memahami dunia profesional secara nyata.",
            img: "pict/kegiatan/1.2.jpg"
        },
        3: {
            title: "Personality Development Program",
            desc: "Kegiatan pembinaan diri yang membantu peserta meningkatkan kepercayaan diri, etika profesional, komunikasi, dan sikap kerja untuk mendukung perkembangan pribadi maupun karier.",
            img: "pict/kegiatan/1.3.jpg"
        },
        4: {
            title: "Uji Kompetensi",
            desc: "Proses penilaian untuk mengukur kemampuan dan keterampilan peserta didik sesuai standar yang ditetapkan, guna memastikan mereka siap bekerja secara profesional di bidangnya.",
            img: "pict/kegiatan/1.4.jpg"
        },
        5: {
            title: "Beauty And Handsome Class",
            desc: "Sesi pelatihan penampilan diri yang membantu peserta didik memahami grooming, cara berbusana yang tepat, serta teknik dasar merawat diri agar tampil lebih rapi dan percaya diri.",
            img: "pict/kegiatan/1.5.jpg"
        },
		
        6: {
            title: "HUT Kampus",
            desc: "Perayaan hari jadi kampus yang diisi dengan berbagai kegiatan kebersamaan, apresiasi, dan hiburan untuk mempererat hubungan antar Peserta didik, Pengajar, serta seluruh civitas akademika",
            img: "pict/kegiatan/1.6.jpg"
        },

        7: {
            title: "Leadership Camp",
            desc: "Kegiatan pelatihan kepemimpinan yang dirancang untuk mengembangkan karakter, kerja sama tim, dan kemampuan memimpin melalui aktivitas pembelajaran dan simulasi di luar kelas.",
            img: "pict/kegiatan/1.7.jpg"
        },
		
		8: {
            title: "Entrepreneur Visit",
            desc: "Kegiatan kunjungan ke pelaku usaha untuk mengenal proses bisnis secara langsung, menggali inspirasi, serta memahami strategi dan tantangan nyata dalam dunia kewirausahaan.",
            img: "pict/kegiatan/1.8.jpg"
        }

    };

    const modal = document.getElementById("kegiatanModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDesc = document.getElementById("modalDesc");
    const modalImage = document.getElementById("modalImage");
    const closeBtn = document.querySelector(".modal-close");

    // Open modal on click
    document.querySelectorAll(".km-item").forEach((item, index) => {
        item.addEventListener("click", () => {
            const data = kegiatanData[index + 1];
            modalTitle.textContent = data.title;
            modalDesc.textContent = data.desc;
            modalImage.src = data.img;

            modal.style.display = "flex";
        });
    });

    // Close modal
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Click outside modal to close
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
	
// MODE EVENT
let adaEvent = true; 

if (adaEvent) {
    document.getElementById("no-event").style.display = "none";
    document.getElementById("event-list").style.display = "grid";
} else {
    document.getElementById("no-event").style.display = "block";
    document.getElementById("event-list").style.display = "none";
}