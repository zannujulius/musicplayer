import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import * as FileSystem from "expo-file-system";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  FlatList,
  TouchableOpacity,
} from "react-native";
import * as MediaLibrary from "expo-media-library";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";

const { StorageAccessFramework } = FileSystem;

export default function App() {
  const [progress, setProgress] = useState(0);
  const [adFiles, setAdFiles] = useState([]);
  const [data, setData] = useState([]);
  const [audioFiles, setAudioFiles] = useState([]);

  useEffect(() => {
    (async () => {
      try {
      } catch (err) {}
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("http://172.20.10.4:5000/files");

        setData(res.data.data);

        const album = await MediaLibrary.getAlbumAsync("fuelmetricAds");

        // request for media Permission

        // if (status == "granted") {
        //   const adExist = await MediaLibrary.getAlbumAsync("Music");

        //   if (adExist == null) {
        //     console.log("File doesn't exist");
        //     // the ads folder
        //     const folderAd = await MediaLibrary.createAlbumAsync("test///");
        //     console.log(folderAd, "//////");
        //     return;
        //   }

        //   const all = await MediaLibrary.getAssetsAsync({
        //     album: adExist,
        //     mediaType: "audio",
        //   });

        //   console.log(all.assets[0]);

        //   // the ad files in the ad folder
        // }
        // console.log(status, "status");
      } catch (err) {
        console.log(err.message);
      }
    })();
  }, []);

  async function downloadProcess(name, dir) {
    // if (adsFolder == null) {
    //   console.log("Folder doesn't exist");
    // }
    // console.log("Folder exist");
  }

  const handleDownload = async (name) => {
    const dir = FileSystem.documentDirectory + "music/";
    const musicDir = await FileSystem.getInfoAsync(dir);
    console.log(musicDir);
    if (!musicDir.exists) {
      await FileSystem.makeDirectoryAsync(dir, {
        intermediates: true,
      });
    } else {
      let audioPath = FileSystem.documentDirectory + `music/${name}`;
      const downloadResumable = FileSystem.createDownloadResumable(
        `http://172.20.10.4:5000/files/${name}`,
        audioPath,
        {},
        (downloadProgress) => {
          const dprogress =
            downloadProgress.totalBytesWritten /
            downloadProgress.totalBytesExpectedToWrite;
          setProgress(dprogress);
        }
      );
      const { uri } = await downloadResumable.downloadAsync();
      const assets = await MediaLibrary.createAssetAsync(uri);
      let adsFolder = await MediaLibrary.getAlbumAsync("fuelmetricAds");
      if (adsFolder == null) {
        let stored = await MediaLibrary.createAlbumAsync(
          "fuelmetricAds",
          assets,
          false
        );
        console.log(stored, "/////first time");
        return;
      }

      let existingStored = await MediaLibrary.addAssetsToAlbumAsync(
        assets,
        adsFolder.id,
        false
      );

      console.log(existingStored, "////already existing");
    }
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      {data.map((i, index) => (
        <TouchableOpacity
          key={index}
          style={{
            width: "95%",
            padding: 13,
            backgroundColor: "#ddd",
            marginVertical: 2,
            borderRadius: 3,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          onPress={() => handleDownload(i)}
        >
          <Text>{i.split(".")[0]}</Text>
          <View>
            <AntDesign name="download" size={20} color="black" />
          </View>
        </TouchableOpacity>
      ))}

      <Text>{JSON.stringify(progress * 10)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
