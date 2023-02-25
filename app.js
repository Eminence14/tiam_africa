const faqs = Array.from(document.querySelectorAll('.faq_card'));
faqs.forEach((faq) => {
    faq.addEventListener('click', () => {
        const imgPar = Array.from(faq.children)[0]
        Array.from(faq.children)[1].classList.toggle('active')
        Array.from(imgPar.children)[0].classList.toggle('active')
    })
})