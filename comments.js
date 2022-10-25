// useEffect(() => {
//   (async () => {
//     try {
//       // request for permisssion
//       const { status } = MediaLibrary.requestPermissionsAsync();
//       if (status == "granted") {
//         // if the status is granted
//         const dir = FileSystem.documentDirectory + "music/";
//         const musicDir = await FileSystem.getInfoAsync(dir);
//         // if dir doesn't exist
//         if (!musicDir.exists) {
//           // create the directory
//           await FileSystem.makeDirectoryAsync(dir, {
//             intermediates: true,
//           });

//           // download the file
//           const downloadResumable = FileSystem.createDownloadResumable(
//             "http://techslides.com/demos/sample-videos/small.mp4",
//             dir,
//             {},
//             (downloadProgress) => {
//               const dprogress =
//                 downloadProgress.totalBytesWritten /
//                 downloadProgress.totalBytesExpectedToWrite;
//               setProgress(dprogress);
//             }
//           );

//           const { uri } = await downloadResumable.downloadAsync();
//           console.log("Finished downloading to ", uri);

//           const pathToFile = await MediaLibrary.createAssetAsync(uri);

//           // const stored = await MediaLibrary.("musicad )

//           // move the the music ablum
//           // return;
//         }

//         //id dir exist
//       }

//       // downlaod audio file

//       // const dir =
//       //   FileSystem.documentDirectory + "music/bello-1665393340670.mp3";

//       // const newfiles = await MediaLibrary.createAssetAsync(dir);
//       // console.log(newfiles);

//       // const stored = await MediaLibrary.createAlbumAsync(
//       //   "musicad",
//       //   newfiles,
//       //   true
//       // );

//       // console.log(stored);
//       // console.log(files);
//       // const { status } = await MediaLibrary.requestPermissionsAsync();
//       // if (status == "granted") {
//       //   const { uri } = await Camera.takePictureAsync();
//       //   const asset = await MediaLibrary.createAssetAsync(uri);
//       //   console.log(asset);
//       // }
//     } catch (e) {
//       console.log(e.message);
//     }
//   })();
// }, []);

// const fileName = (link) => link.split("/")[link.split("/").length - 1];
// useEffect(() => {
//   (async () => {
//     try {
//       const { status } = await MediaLibrary.requestPermissionsAsync();

//       if (status) {
//         const assets = await MediaLibrary.getAssetsAsync({
//           mediaType: "audio",
//         });
//         console.log(assets);
//       }

//       if ((Platform.OS = "android")) {
//         const dir = FileSystem.documentDirectory + "music/";
//         const musicDir = await FileSystem.getInfoAsync(dir);
//         console.log();
//         if (!musicDir.exists) {
//           await FileSystem.makeDirectoryAsync(dir, {
//             intermediates: true,
//           });

//           const content = await FileSystem.readDirectoryAsync(dir);

//           const downloadResumable = FileSystem.createDownloadResumable(
//             "http://techslides.com/demos/sample-videos/small.mp4",
//             dir,
//             {},
//             (downloadProgress) => {
//               const dprogress =
//                 downloadProgress.totalBytesWritten /
//                 downloadProgress.totalBytesExpectedToWrite;
//               setProgress(dprogress);
//             }
//           );

//           const { uri } = await downloadResumable.downloadAsync();
//           console.log("Finished downloading to ", uri);
//           return;
//         }

//         if (musicDir.exists) {
//           console.log("exist");
//           const content = await FileSystem.readDirectoryAsync(dir);
//           console.log(content);
//           // const downloadResumable = FileSystem.createDownloadResumable(
//           //   "http://172.20.10.3:5000/files/bello-1665393340670.mp3",
//           //   dir +
//           //     fileName(
//           //       "http://172.20.10.3:5000/files/bello-1665393340670.mp3"
//           //     ),
//           //   {},
//           //   (downloadProgress) => {
//           //     const dprogress =
//           //       downloadProgress.totalBytesWritten /
//           //       downloadProgress.totalBytesExpectedToWrite;
//           //     setProgress(dprogress);
//           //   }
//           // );
//           // const { uri } = await downloadResumable.downloadAsync();
//           // console.log("Finished downloading to ", uri);
//         }
//       }
//     } catch (e) {
//       console.log(e.message, "///////////");
//     }
//   })();
// }, []);
