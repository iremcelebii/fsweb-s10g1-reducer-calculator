# Sorunu Anlamak:

1. 1 butonuna basılmasından, güncellenen değerimizin render edilmesine kadar olan uygulama adımları nelerdir?
   Her adım için kodun hangi bölümünün geçerli olduğunu listeleyin.

- Kullanıcı 1 butonuna tıkadı.
- app.js de calcbutton adında bir component tanımladık
  bu componentin 2 propu var

butona tıklandığında çalışmasını istediğimiz fonksiyonu ve butonun value değerini prop olarak veriyoruz

value değeri 1 zaten

onclickte çalışmasını istediğimiz fonksiyonda ise dispatch ile usereducer hookunda yazdığımız reducer fonksiyonuna bir eylem gönderiyoruz

reducer fonksiyonu reducers klasöründe index.js dosyasında tanımlanmış

bu fonksiyona ise parametre olarak actions klasörünün altında index.js dosyasında tanımlanmış olan addOne foksiyonunu veriyoruz

aslında parantez açıp kapatarak bu fonksiyonun return değerini veriyoruz reducer fonsiyonuna

return değeri type: ADD_ONE oluyor

reducer fonksiyonunda type ı bu olan case ile eşleşiyor ve state deki total değeri 1 artıyor

ekranda nasıl göreceğiz peki?

totaldisplay componentindeki value propunu {state.total} a eşitliyoruz

- TotalDisplay total artı 1'i gösterdi.
