import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import styles from "./styles";

const Home = ({ navigation }) => {
  const state = useSelector((state) => state.App.list);
  console.log("Home sayfa", state);


  const [result, setResult] = useState("");

  React.useEffect(() => {

    let randomNumber = Math.floor(Math.random() * 2) + 1

    switch (randomNumber) {
      case 1: setResult(<View style={styles.container}>
        <View style={styles.faces}>
          <Image source={require("../../İmages/facebg.png")} style={styles.facebg} />
          <Image source={require("../../İmages/face.png")} style={styles.face} />
          <Image source={require("../../İmages/eyes.png")} style={styles.eyes} />
          <Image source={require("../../İmages/dry.png")} style={styles.dry} />
          <Image source={require("../../İmages/body.png")} style={styles.body} />
        </View>
        <View style={styles.kurucilt}>
          <Text style={styles.kurucilttext}>KURU CILT BAKIMI</Text>
          <Text style={styles.kuruciltdescription}>
            Her cilt neme ihtiyaç duyar.Eğer kuru bir cilt yapısına sahipseniz nemlendirme etkisi yüksek ürünler kullanarak cildinizin nem ve yağ
            oranını dengede tutabilir ve daha sağlıklı bir cilde kavuşabilirsiniz.
          </Text>
          <Text style={styles.kuruskincare}>KURU CİLT İÇİN GÜNLÜK CİLT BAKIM RUTİNİ ADIMLARI NEDİR?</Text>
          <Text style={styles.kuruskincaretext}>
            Kuru cildiniz için sabun içermeyen ve ciltte peeling etkisi oluşturmayan ürünleri tercih etmelisiniz. Tonik seçiminde tercihiniz alkol
            içermeyen ve ciltte gerginlik hissi yaratmayan ürünlerden yana olmalı. Kuru ciltlerin günlük bakım rutininde olmazsa olmazı tabii ki
            nemlendiriciler. Hassas ve kuru ciltler için krem veya jel formunda tasarlanan ürünler cilt tarafından kolaylıkla emilir. Kuru ciltler
            için sadece nemlendirici kullanmak çoğu zaman yeterli olmaz. Cilt bariyerini güçlendiren yağ ve serumlarla cildinize nem terapisi
            yapabilirsiniz.
          </Text>
        </View>
      </View>);
        break;
      case 2: setResult(<View style={styles.container}>
        <View style={styles.faces}>
          <Image source={require("../../İmages/facebg.png")} style={styles.facebg} />
          <Image source={require("../../İmages/face.png")} style={styles.face} />
          <Image source={require("../../İmages/eyes.png")} style={styles.eyes} />
          <Image source={require("../../İmages/dry.png")} style={styles.dry} />
          <Image source={require("../../İmages/body.png")} style={styles.body} />
        </View>
        <View style={styles.karmaciltcontainer}>
          <View style={styles.faceskarma}>
            <Image source={require("../../İmages/facebg.png")} style={styles.facebg} />
            <Image source={require("../../İmages/face.png")} style={styles.face} />
            <Image source={require("../../İmages/eyes.png")} style={styles.eyes} />
            <Image source={require("../../İmages/oildry.png")} style={styles.dry} />
            <Image source={require("../../İmages/body.png")} style={styles.body} />
          </View>
          <Text style={styles.karmacilt}>KARMA CİLT BAKIMI</Text>
          <Text style={styles.karmadesc}>
            karma cilde sahip olanların, T bölgesine farklı, yüzünün geri kalanına farklı ürün kullanmaları önerilir. Özellikle maske yaparken cilt
            özelliklerine uygun maske seçmelisin.
          </Text>
          <Text style={styles.karmaskincare}>KARMA CİLT İÇİN GÜNLÜK CİLT BAKIM RUTİNİ ADIMLARI NEDİR?</Text>
          <Text style={styles.karmaskincaretext}>
            Karma ciltler için temizleyici seçerken jel ve köpük içerikleri ürünleri kullanabilirsin. Karma ciltler için bakım rutini yüz temizleme
            ile başlar. Yüzünü iyice temizledikten sonra karma ciltlere uygun tonik ile yüzünü tekrar silerek gözeneklerinin temizlenmesini
            sağlamalısın. Karma bir cilde sahip olduğun için bu konuya özellikle dikkat etmeni öneririz. T bölgen yağlanmaya yatkınken, yanak bölgen
            daha fazla neme ihtiyaç duyuyor. Bu yüzden mutlaka cilt tipine uygun çok işlevli ürünler seçmelisin. Ayrıca gece yatmadan önce yanaklarını
            nemlendirebilir, T bölgeni ise tonikle silmekle yetinebilirsin. Cildinin yağ dengesini düşerecek bir nemlendirici arıyorsan içeriğinde yağ
            bulunmayan nemlendiricilere bakmalısın. Karma cilt tipinin en büyük sorunlarından biri burun kenarlarındaki geniş gözeneklerdir. Bunları
            yok etmek sandığın kadar kolay olmuyor maalesef! Geniş gözeneklerini sıkılaştırmak için öncelikle gözeneklerini derinlemesine temizlemen
            gerekiyor.
          </Text>
        </View>
      </View>
      );
        break;
      case 3: setResult(<View style={styles.container}>
        <View style={styles.faces}>
          <Image source={require("../../İmages/facebg.png")} style={styles.facebg} />
          <Image source={require("../../İmages/face.png")} style={styles.face} />
          <Image source={require("../../İmages/eyes.png")} style={styles.eyes} />
          <Image source={require("../../İmages/dry.png")} style={styles.dry} />
          <Image source={require("../../İmages/body.png")} style={styles.body} />
        </View>
        <View style={styles.yaglıcontainer}>
          <View style={styles.facesyaglı}>
            <Image source={require("../../İmages/facebg.png")} style={styles.facebg} />
            <Image source={require("../../İmages/face.png")} style={styles.face} />
            <Image source={require("../../İmages/eyes.png")} style={styles.eyes} />
            <Image source={require("../../İmages/body.png")} style={styles.body} />
            <Image source={require("../../İmages/oilforehead.png")} style={styles.oilforehead} />
            <Image source={require("../../İmages/oiljaw.png")} style={styles.oiljaw} />
            <Image source={require("../../İmages/oilnose.png")} style={styles.oilnose} />
          </View>
          <Text style={styles.yaglıcilt}>YAĞLI CİLT BAKIMI</Text>
          <Text style={styles.yaglıdesc}>
            Yağlı ciltler sık temizlenmeye ihtiyaç duyar ve temizlendikçe daha çok yağlanır. Yağlı cilt türünün tipik özelliklerini saydığımızda bunu
            daha açık bir şekilde görebiliriz: Gözenekler büyüktür. Akne oluşturmaya yatkın bir cilt yapısı söz konusudur. Cilt kalınlaşma eğilimi
            gösterebilir. Siyah ve beyaz noktalara sıklıkla rastlanır. Burun üstü ve çene bölgesinde tüylenme olabilir.{" "}
          </Text>
          <Text style={styles.yaglıskincare}>YAĞLI CİLT İÇİN GÜNLÜK CİLT BAKIM RUTİNİ ADIMLARI NEDİR?</Text>
          <Text style={styles.yaglıskincaretext}>
            Yağlı cilde sahip hemen herkesin yaptığı en yaygın hata çok güçlü yağ kurutma özelliği olan ve çoğu zaman üzerinde “yağlı ciltler için
            yazan” sert kozmetiklerin kullanılmasıdır. Bunun yerine cildinizi su bazlı krem temizleme sütleri, yağlı ciltler için temizleme yağları
            ile uzun süre masaj yaparak temizleyin. Cildinizi temizledikten ve kuruladıktan sonra muhakka tonik kullanın. Salisilik asit, glikolik
            asit, laktik asit içeren tonikler sebum dengesini kısa sürede yeniden oluşturmaya yardımcı olacaktır. Gözenek genişlemesinin yağlı ciltler
            arasında daha yaygın gözlemlenmesinin sebebi budur. Büyük gözeneklerden sebum sıvısı daha çok ve daha kolayca cilde yayılır. Su bazlı
            nemlendiriler ve yağlı ciltlere uygun güneş kremleri ile cildin günlük nem ihtiyacı karşılandığı takdirde, yağ dokusu aşırı sebum
            salgılamaktan bir süre sonra vazgeçecektir. Hyaluronik asit içeren, yüksek nemlendirme özelliğine sahip ürünleri tercih edebilirsiniz.
          </Text>
        </View>
      </View>
      );
        break;
    }

  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {result}

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login", { screen: "Login" });
            console.log(navigation.navigate("Login", { screen: "Login" }));
          }}
          style={styles.homepage}
        >
          <Text style={styles.homebutton}>Go Home Page</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export { Home };
