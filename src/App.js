import './App.css';
import Service from './Service';
import Header from './Header';

function App() {


  const servicaData=[
    {
      title:"Apple",
      subtitle:"Malus pumila",
      desc:"An apple is an edible fruit produced by an apple tree (Malus domestica).Apple is diploid , has 17 chromosomes. Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus.",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROvX7pBOmIqE69Hv4udK1IZTYjqbxKE3_g32Vb9qOJL2IJCYXQmqU5unbxTNmbMENOYBk&usqp=CAU"
    
    },
    {
      title:"Orange",
      subtitle:"Citrus X sinensis",
      desc:"The orange is the fruit of various citrus species in the family Rutaceae  Citrus × aurantium, referred to as bitter orange. The sweet orange reproduces asexually ,varieties of sweet orange arise through mutations.",
      img:"https://media.istockphoto.com/photos/orange-picture-id185284489?k=6&m=185284489&s=612x612&w=0&h=x_w4oMnanMTQ5KtSNjSNDdiVaSrlxM4om-3PQTIzFaY="
    
    },
    
    {
      title:"Kiwi",
      subtitle:"Actinidia deliciosa",
      desc:"Kiwifruit (commonly shortened to kiwi in North America) or Chinese gooseberry is the edible berry of several species of woody vines in the genus Actinidia.",
      img:"http://oscar.kiwi/uploads/2018/04/Oscar-Kiwi-1024x683.jpg"
     
    },
    {
      title:"Banana",
      subtitle:"Musa acuminata",
      desc:"A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa",
      img:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhAPEhAPEBAPDw8PDw8PEA8PDw8PFREWFhURFRUYHSggGBolGxUVITEhJSkrLy4uFx8zODMtNygtLisBCgoKDg0OGhAQGisfHR0tLS0tLystKy0tLSstLS0tLSstLS0tLS0tLSstLS0tLS0tLS0tLS0tKy0tLS0tLS04K//AABEIAMEBBQMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAgMGB//EAD8QAAIBAwEFBAYHBgYDAAAAAAABAgMEERIFITFBUQYTYXEUIjKBkaEjQlJicrHRBxVDU4LBM2OSouHwk9Lx/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECAwQFBv/EACcRAAICAgICAgICAwEAAAAAAAABAhEDEgQxIVEFQRMyImEjQlIU/9oADAMBAAIRAxEAPwD7iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAc7itGnCdSTxGEZTk8N4jFZbwvBAG7Pkn7RP2iXdKdShZw00aTUKl01l1an1o0eWmPBy37924t9rftGtML6WpFS4QhTquTjyy0jy/72t9o1404eooUZqLqxUVKepYilny+ByTzu6SdezbHDz5IfZT9pV5DVG4lUmqkoqm1GLnF8Gnnlz5H2PsxteN3QVVPLU505vTp9eEtL3cj5Otg1M95NKMYyxJQjHElzjubb8PcfSuylWEV3SynLVLDWN8VHVu8pR+AxZLlRpmgkrPSAA6zlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABV9oK2KU4bvpE4PO/1WmpfIspSwsvkeT7RbSTUnwSW7yOXlZ1jh/ZaKtnzy/7OKdWSzHSopez6yWMYxwJmzOz1KFSlUjKeqEt6lwxpa4LC4tFj2bTqd/WlvUpqnT8op6vnJfAnzpY3njy5OS15N0znbQcZyU51dDeqmktTxjfHh1e7J6XZNtirRnjhTrQTftRU9En8dCPK7G2spSm9eNMpQUlnfjjnq85XuPT2Vac50tOH66be/VjDzv+J2YMsdy2SVo9OAD1jkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgNkG+uWk1Exy5o41bJSsj7VvN2lcOfiz532pvX7Ed8pNJJc29yR6m+rYTbPL7HtfSLmVeS+joez41fq/Dj8DwcuZ5Z2zWqLyws1QpU6XHRHe+snvk/i2Q9u3fdUatTnGL0/ie5fNot5c2eP7d1fo6dNfXqpvyis/ngpHzIllZ2Xjpco79zTXvWX8z6RsKpiVN+KXxWP7nzvZS0yh96H5P/k9tsmrw8C6lrkTK/R7wGlGepJ9Umbn0cXasyAAJBBvdrUKMqdOpVjGpVz3VN751McdKXE29OXR+/ceIu7+nUv6larSlTnaarajq4uOcup4KW74IvaN/TlwkjyeZz3jlrE3hiTVsvFdrodFcRKqE8nRSOePyOQs8KLONRPmboq4zOkazXM6cfyP/AEijxeixBEhc9TtCsmdsOVjn0zNxaOoMJg3TsqZABIAAAAAAAAAAMZNJ1Uispxj2xR0NJzSI9Su+W4jTlk4M/OUfEDWONvs61rnJBr1DeTIN1W0rPPkuZ4ubPKTts6FBIqds6p4ow9ue7yXj4E2y2dGjTjTjy3t85SfGT/7yJNja6czl7cuPguhJ0lI3FeStWV86W48X23ovVbvlmovf6v8AyfRJUih7TbOVSlLdvg1Uj5rj8mzSHjyRKPg8ZYrfS/rX5HrdlM81YWstUUlnCk378Hq9k28lnO4iUv5FEj1mya+VofFb15FgUFtFxakuReUampZ/7k9zg5946vtFJwrydAAd5mfP+2tnNXKrSxonThThhP6rbal1eZP3YKim2uDaPpG2Nnq4puD3PjB9JcvcfPa9vKEnCSalF4aPn/kcLWTb6Z1YZJqiVa7RqR55LShtfPE8+kbxkeW410dCPXUbyMuZ3U0eRp1GiVSvpx55CyNE6o9OpG6mUdHa657idSvoS5mkcyKPGWcaj6nSNwyFGfibKR0w5Mo9MyeNFhGubqsivUjbWdUefkRm8SJ/eId4upBUzOs2XyMvRX8ZN71dTDrIh6g5EP5CfpE/jJTrmjrsj6jDZjPm5H9kqCOzqs0cjm2aykc8szfbLqJu2cpyOc6yXMhV7/lFNt8EllnNPKjSMDpd3MYLLfkR9nUJVX3s16v8NPn943t9lucu8rb+ap8vOXXyLbgIQf7SEpfSOWk1wbykaM0asJDJGuYppp800/I7tnCvIs+i1HltkUN8n0en4M9BaRSyV2zafq5+1KUvjJss6C3HMnciiRPpyJVpVw/BlapHajU3nbhyOEk0TKNovQc6M8pMwfRxlskzhfg6FTtzY0a61LCqJbnykujLcFcmOOSOsiU2naPmte2lBuMk4tcUzlpPoe0Nn06y0zXlJbpLyZ5XaPZ+rSzKP0kPur10vFfoeHyODKHleUdUMqfZUROiZrj3GcHmygbqRnJ0TOdOnKXsxlL8MWyVDZ1w/wCFL3uK/uZODf0XUkb0rqa5kintOS4nKOybj7C/1xN/3VX+wv8AVH9Sv45rpMbRJlPakSRDaEHzKr921v5b+Mf1HoNb+VL/AG/qT/lRFY2XcbuPU39Ij1RQqyrfyp/I2VnX/lz+RZZMvojSHsvPSI9TDuo9Sl9Cr/Yl8V+pstn139T4yj+pbfN6I1h7LV3sepzlfohR2TXfOEfOTb+SJFPYr+tU/wBK/Ua5mReNGs7/AMTj6VKTxFSk/BZLKns2jHitT+88/LgSNcVuWElySwiywP8A2kR+RfSKuls+rP23oXRNSl+iLG3tYU/ZWOr4t+bDrGrlk1ioR/VFXs+zq5nNvJq5DWWu+womTSUjWUznKRNlkjZsg7RraYyfRPHnyJEpFXeT7ypCkvxz/CnuXvf5FJukSd7OlpjFdEkTILgYp0zqkYw7CRhG1PiY6iDOldguLCXq+TMGLDg/cD3sMnojin+zJoAOwzBhmT5R+1zbNe3ubWMbicaXdSnKhTcoJzctKlUa9uLWcR5OPiisnSslK2e/2pb2086ktX2o7n7+pUUqdtT+++st/wAuB5K12nUrJNt4aWOPAs6EmfLcvkSnPwkjsxxpHo1tJcFHd8DPp8uiKilNkiMzj/JP2baoslfS6Iyr6XQgxmbqoTvL2Rqib6dLoZV8+nzIamZ1E7z9jSJNV6+g9MfQiKRnUT+SfsaRJXpj6GfSpEXUZ1k7y9jREh15GHVl1OOsaydv7GqOupmNRz1mNQtCjtqMORxczXWW3FHZzNXI56jGoXZNHRyNJSNHIi3l1GnFyk8Jc/7Lq/As5UBe3ahFyfLkuLfJLxNdk2zSc5+3Uep+HSPuW44WFrKtJVqicYr/AA6b+qvtS+8/kXkIGLdkMwlgM3ZqzWEaBrIQ4mGb04m0Fcgy12evVfmDtbQxFLwB9HihUEjz5O2dgAbFQfPP2udlvSqMLuEZyrWzipRi1iVu6ic20/srL3eJ9DMSWd3IiStUSnTPkdCn3eFjdhYxwxjcT6dQ9ZtPs7F5lT3f5e7H9P6HnK2znFvimuKfI+Y5XFnCXlHVjmjWNU7RrEGUWuKMxmcOpvZYxrHRVivUzdTI1JssFcG3flfrNlUGpFlh3w74g96Y74UTZYd8Z70gd6ZVUgknd6O8ZD7w3UwCSps2UiN3hsqpZAkZM6iN3pjvS1oElzNJTKzaG16NBZq1Iw6Jv1n4KK3shU7i7ut1Gm7ek+NasvpWvuU/q+cvgaJNq+kCx2jtWFLEXmVSXsUob6k/Jcl4vchs/ZtSpJVrjGVvp0lvhS/9pePwwSdk7Cp0My3zqS3zq1HqqTfjJ/8AUW6iVb+kRZiEcGwbOcpkxSRHZls0bMZGTROyaMEq2hmSXj8jhFFls2lxl7l/c7eJi2kjPLKolgjIB9AcAAAAAAAIt3Ywq+0t/KS3NEoFZRUlTCdHmbzs/NZcGprpwf6FLc2Lh7cJRzzcZLefQDVxzuODL8djl14NVlaPnXcP/wC/8GNDPe1dm0ZcacM9UtL+R4rtNaVbV60nOg37eMun4Sx+Z5+f4+WNX2jWOXZ0RHk1lUwRqd7qWVhrwMTr+Bw6GtM6yuTjO8SI9Wv4FLY7bo1bjuJRqKKqujOa0rE84Sxxxnn4otHC5XX0La7PQLaK6mVtOPU9Da7HtF/BpyfWfrv/AHFnRt6UfZhCP4Yxj+Rz7Rui54yltHLwozflCT/IlxuJ/wAur/45/oevSj4G2lFqT6Fnj3cyX8Ot7qVR/wBjHps/q0LqXlQqfm0ew0oaENRZ47XfT3U7Rw+9XqQgvhHLNl2evav+NdqlF8YWsMPHTvJ7/kj2GhGcI0TrpIbFBsrsra271xp6qj41akpVKj/qlvXuLuNNLkdMmGyGnJ2yLBq2Gzm5FlFIJGZnNmXI0ciGi6GDaKMRRuaY4ENnSjByaS5l5ShpSS5Ig7Oo49Z8X8kWJ7/DxaRt9s4s0rYAB2GIAAAAABjIyMDAAyYyGc5TBJs5nCvUi000mmsNNJpryOdWsVl3d4KtkpHmtvdnoQbqW7Ud+XRbxj8Mv7P4nnZV3F4knF9GsHqL+6byeb2hJy47zy+RxoSdx8HTjm14I1SumeKcKtS5cYNqTuFJfFNt/D5HobiLXBtEzYtnB6qsF9JuUlu9R/d8GYQX4YybLT/keuspSS3k+nUZXbPrZWOfMnRkeHNeTWPROpVCTCoVsJnWNQmLaL0WKkjZYIKqG6qs3UyNSYsGcoid6bKoWU0RqSHM0czjrMaydhqdHI1cjTWa5ILG+oxgwmEXjEhs6o7W8MvecE+S3ss7Og+LPU4vHvyznyT+iZQR3RrFGx666ORsAAkgAAAAGADINWzWUwDds4zOdSuRalwLolIzcMo7yROr3BVXEs53mUmXRVXbKi4iXFxEr69PwOWaNEUtxSItKvKjLXH3rk10LWtRfQg16JjJJqmaIvrK6hUiqkeLeHyw+klyZaUa2Vx8/M8HSqTpS1weHwa4xkujXNFzbbXjUwtXcVOGXvg/e+Xg/ieZm4v2jSLPVRkdoSKmjfcpRcVynxhLyxwLGnJHG4V2XslRZspHBSNtQ1Js7qZlSOKkZUvEnUbHZSM5OLqId6i8URsdw5EWpcKKzJqK6tpL5nCnXqVnihTlP/MknGmvHPFm0Mbk6iirlRLqV1FZbwha95WfqRaj9p7skzZ/ZzLU60nUl04Qj5I9BRt4xSSSR6nH4TXmRzzzeiFY7PUN73ssYxSNgepGKRzt2AAWIAAAAAABhmQAc5I4VIsl4NXEElZUgyPVpsuHSRpKgVaJsoKlBkedqejlbI5+hoq4stZ5idiRq1h4HrZWaOU7JPkUeMbHhLm2xyK2tb+B9Cr7Mi+RV3mzGluj8jKWJl1M8DcUSBVonqbywnv3Mralm+jOWSaZqpFRQuatL2JtL7L3x+DLK27TzjjXTz405afk/wBTWVk+jOf7sk/qv4MxlijLtE2XVv2stnulKcH9+D/OOUTIdo7V/wAan75pfmebh2eqT4Ql8GTKHYurL6mPMz/8afVjcvlt+1/n0l/XDP5nOfaS1X8WMvw5l+WTFj+zvO+bS8kel2d2Jtqe9w1PxyzSPx7ZV5UjzNPbvePFGhWqvwjoj89/yLO22Zf1+Kp20PDNSp8Xu+R7W2sKdNYjBJeCJKR1Y/joLszeZ/R5uw7JUotTqudafWq9SXkuCPQUqEYrCSSXQ6g7oYow6Rk5NgAGhUAAAAAAAAAAAAAAAAAAGGAAYZqYAJMSOYABzkRq4BRlkU96U9bmAcWQ1Rzp8iwtjAKxLFtbFpbgHRHozZNidEAbxMmZABcgAAAAAAAAAAAAAAA//9k="
     
    },
    {
      title:"Cherry",
      subtitle:"Prunus avium",
      desc:"A cherry is the fruit of many plants of the genus Prunus, and is a fleshy drupe (stone fruit).The name 'cherry' also refers to the cherry tree and its wood.",
      img:"https://lh3.googleusercontent.com/proxy/bLb65vjiipRfGwrI-doAvg_TLmjqSGWoFhGXpkW0i_1yPl4r7lyhz8jWktgAnFzWI2Os481Yda8sv30tRuL3GQuld7a2hDSexQ"
     
    }
    
  ]


  return (
    <>
    <Header/>
    <div className="container">
        

            {
              servicaData.map((data,label)=>(
                <Service key={label} title={data.title} subtitle={data.subtitle} img={data.img} desc={data.desc}  />
              ))
            }
         
          
      </div>
      </>
  );
}

export default App;
