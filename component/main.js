import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { warna } from "./warna";
import { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import * as Contacts from "expo-contacts";

export default function MainScreen({ navigation }) {
  const [text, settext] = useState("");
  const [DATA, setDATA] = useState([]);
  const [database, setDatabase] = useState();

  // Mengambil Data
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
          const contact = data;
          setDATA(contact);
          setDatabase(contact);
        }
      }
    })();
  }, []);

  // Pilih Warna
  const pilihwarna = (id) => {
    let jml = 0;
    for (let i = 0; i < id.length; i++) {
      jml = jml + parseInt(id[i]);
    }
    let ubah = jml.toString();

    return warna[ubah[ubah.length - 1]];
  };

  // Fungsi Pencarian
  const cari = () => {
    let data = database;

    data = data.filter((item) =>
      item.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())
    );
    setDATA(data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Kontak</Text>
      </View> 
      <TextInput
        style={styles.cari}
        value={text}
        onChangeText={(text) => {
          settext(text);
        }}
        onKeyPress={() => {
          cari();
        }}
        placeholder={"Cari"}
      />
      <TextInput
        style={styles.Agus}
        value={text}
        onChangeText={(text) => {
          settext(text);
        }}
        onKeyPress={() => {
          Agus();
        }}
        placeholder={"AGUS"}
      />  
            <TextInput
        style={styles.Baim}
        value={text}
        onChangeText={(text) => {
          settext(text);
        }}
        onKeyPress={() => {
          Baim();
        }}
        placeholder={"BAIM"}
      />  
      <TextInput
        style={styles.Caca}
        value={text}
        onChangeText={(text) => {
          settext(text);
        }}
        onKeyPress={() => {
          Caca();
        }}
        placeholder={"CACA"}
      />
      <TextInput
        style={styles.Dewi}
        value={text}
        onChangeText={(text) => {
          settext(text);
        }}
        onKeyPress={() => {
          Dewi();
        }}
        placeholder={"DEWI"}
      />
      <TextInput
        style={styles.Ela}
        value={text}
        onChangeText={(text) => {
          settext(text);
        }}
        onKeyPress={() => {
          Ela();
        }}
        placeholder={"ELA"}
      />     
      <TextInput
        style={styles.Ferdy}
        value={text}
        onChangeText={(text) => {
          settext(text);
        }}
        onKeyPress={() => {
          Ferdy();
        }}
        placeholder={"FERDY"}
      />
      <TextInput
        style={styles.Galih}
        value={text}
        onChangeText={(text) => {
          settext(text);
        }}
        onKeyPress={() => {
          Galih();
        }}
        placeholder={"GALIH"}
      /> 
      <TextInput
        style={styles.Hafid}
        value={text}
        onChangeText={(text) => {
          settext(text);
        }}
        onKeyPress={() => {
          Hafid();
        }}
        placeholder={"HAFID"}
      />
      <TextInput
        style={styles.Ikhsan}
        value={text}
        onChangeText={(text) => {
          settext(text);
        }}
        onKeyPress={() => {
          Ikhsan();
        }}
        placeholder={"IKHSAN"}
      />
      <TextInput
        style={styles.Johan}
        value={text}
        onChangeText={(text) => {
          settext(text);
        }}
        onKeyPress={() => {
          Johan();
        }}
        placeholder={"JOHAN"}
      />

      <TouchableOpacity
        style={styles.buttonPlus}
        onPress={() => {
          navigation.navigate("Tambah Kontak");
        }}
      >
        <AntDesign name="plus" size={30} color="white" />
      </TouchableOpacity>

      <StatusBar backgroundColor="#000000" barStyle="light-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    backgroundColor: "white",
  },
  header: {
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d10000",
  },
  textHeader: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1.5,
    color: "#000000",
  },
  cari: {
    backgroundColor: "#4f504e",
    marginHorizontal: 18,
    marginVertical: 15,
    height: 40,
    borderRadius: 6,
    paddingHorizontal: 15,
    fontSize: 14,
  },
  Agus: {
    backgroundColor: "#00FFFF",
    marginHorizontal: 20,
    marginVertical: 5,
    height: 40,
    borderRadius: 6,
    paddingHorizontal: 15,
    fontSize: 20,
    color:"#000000",
    fontWeight: "bold",
  },
  Baim: {
    backgroundColor: "#00FFFF",
    marginHorizontal: 20,
    marginVertical: 5,
    height: 40,
    borderRadius: 6,
    paddingHorizontal: 15,
    fontSize: 20,
    color:"#000000",
    fontWeight: "bold",
  },
  Caca: {
    backgroundColor: "#00FFFF",
    marginHorizontal: 20,
    marginVertical: 5,
    height: 40,
    borderRadius: 6,
    paddingHorizontal: 15,
    fontSize: 20,
    color:"#000000",
    fontWeight: "bold",},
  Dewi: {
    backgroundColor: "#00FFFF",
    marginHorizontal: 20,
    marginVertical: 5,
    height: 40,
    borderRadius: 6,
    paddingHorizontal: 15,
    fontSize: 20,
    color:"#000000",
    fontWeight: "bold",},
  Ela: {
    backgroundColor: "#00FFFF",
    marginHorizontal: 20,
    marginVertical: 5,
    height: 40,
    borderRadius: 6,
    paddingHorizontal: 15,
    fontSize: 20,
    tintColor:"#000000",
    color:"#000000",
    fontWeight: "bold",},
  Ferdy: {
    backgroundColor: "#00FFFF",
    marginHorizontal: 20,
    marginVertical: 5,
    height: 40,
    borderRadius: 6,
    paddingHorizontal: 15,
    fontSize: 20,
    tintColor:"#000000",
    color:"#000000",
    fontWeight: "bold",},
  Galih: {
    backgroundColor: "#00FFFF",
    marginHorizontal: 20,
    marginVertical: 5,
    height: 40,
    borderRadius: 6,
    paddingHorizontal: 15,
    fontSize: 20,
    tintColor:"#000000",
    color:"#000000",
    fontWeight: "bold",},
  Hafid: {
    backgroundColor: "#00FFFF",
    marginHorizontal: 20,
    marginVertical: 5,
    height: 40,
    borderRadius: 6,
    paddingHorizontal: 15,
    fontSize: 20,
    tintColor:"#000000",
    color:"#000000",
    fontWeight: "bold",},
  Ikhsan: {
    backgroundColor: "#00FFFF",
    marginHorizontal: 20,
    marginVertical: 5,
    height: 40,
    borderRadius: 6,
    paddingHorizontal: 15,
    fontSize: 20,
    tintColor:"#000000",
    color:"#000000",
    fontWeight: "bold",},
  Johan: {
    backgroundColor: "#00FFFF",
    marginHorizontal: 20,
    marginVertical: 5,
    height: 40,
    borderRadius: 6,
    paddingHorizontal: 15,
    fontSize: 20,
    tintColor:"#000000",
    
    color:"#000000",
    fontWeight: "bold",},  
  boxList: {
    flexDirection: "row",
    alignItems: "center",
    padding: 6,
    marginHorizontal: 15,
    marginVertical: 6,
    paddingLeft: 20,
  },
  tampilanHuruf: {
    fontSize: 18,
    borderRadius: 40,
    height: 50,
    width: 50,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  hurufStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
  },
  buttonPlus: {
    position: "absolute",
    top: 650,
    left: 260,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 30,
    backgroundColor: "#d10000",
  },
});
