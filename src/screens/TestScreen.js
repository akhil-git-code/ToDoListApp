// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   ActivityIndicator,
//   StyleSheet,
// } from 'react-native';
// import axios from 'axios';

// const TestScreen = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           'https://jsonplaceholder.typicode.com/posts',
//         );
//         setData(response.data.slice(0, 10)); // Fetch first 10 posts
//       } catch (err) {
//         console.error(err);
//         setError('Failed to load data.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <View style={styles.container}>
//       {loading ? (
//         <ActivityIndicator size="large" color="#0000ff" />
//       ) : error ? (
//         <Text style={styles.error}>{error}</Text>
//       ) : (
//         <FlatList
//           data={data}
//           keyExtractor={item => item.id.toString()}
//           renderItem={({item}) => (
//             <View style={styles.item}>
//               <Text style={styles.title}>{item.title}</Text>
//               <Text>{item.body}</Text>
//             </View>
//           )}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {flex: 1, padding: 20},
//   item: {
//     marginBottom: 10,
//     padding: 10,
//     backgroundColor: '#f9f9f9',
//     borderRadius: 5,
//   },
//   title: {fontWeight: 'bold', fontSize: 16},
//   error: {color: 'red', textAlign: 'center', marginTop: 20},
// });

// export default TestScreen;

import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const TestScreen = () => {
  const [data, setdata] = useState(undefined);
  const getAPIData = async () => {
    // api call
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };
  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <View>
      <Text style={{fontSize: 30}}>API Call</Text>
      {data ? (
        <View>
          <Text>{data.id}</Text>
          <Text>{data.userId}</Text>
          <Text>{data.title}</Text>
          <Text>{data.body}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default TestScreen;

const styles = StyleSheet.create({});
