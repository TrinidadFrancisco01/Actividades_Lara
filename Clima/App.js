import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList, Image, ActivityIndicator, Alert } from 'react-native';

export default function App() {
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    fetch('https://api.weatherapi.com/v1/forecast.json?key=5a492ff34efa492b91a172441211110%20&q=huejutla&days=10&aqi=no&alerts=no&lang=es')
      .then(res => res.json())
      .then(obj => {
        setData(obj);
        setLoad(true);
      })
      .catch(err => Alert.alert('Error inesperado : ' + err));
  }, []);

  const Card = ({ fecha, iko, min, max }) => {
    return (
      <View style={styles.cardContainer}>
        <Text>{fecha}</Text>
        <Image style={styles.weatherIcon} source={{ uri: 'https:' + iko }} />
        <Text style={styles.temperature}>{max}°C</Text>
        <Text style={styles.temperature}>{min}°C</Text>
      </View>
    );
  };

  const LScreen = () => {
    if (!data) return null; // Asegurarse de que data no es null

    const [currentHourlyForecast, setCurrentHourlyForecast] = useState([]);

    useEffect(() => {
      if (data) {
        const currentHour = new Date().getHours();
        const next24Hours = data.forecast.forecastday[0].hour.slice(currentHour, currentHour + 24);
        setCurrentHourlyForecast(next24Hours);
      }
    }, [data]);

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{data.location.name}</Text>
        <Text style={styles.currentTemperature}>{data.current.temp_c}°</Text>
        <Text style={styles.condition}>
          {data.current.condition.text} - Máx: {data.forecast.forecastday[0].day.maxtemp_c}°C / Min: {data.forecast.forecastday[0].day.mintemp_c}°C
        </Text>

        <FlatList
          horizontal
          data={currentHourlyForecast}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.hourlyContainer}>
              <Text style={styles.hour}>{item.time.split(' ')[1]}</Text>
              <Image style={styles.hourIcon} source={{ uri: 'https:' + item.condition.icon }} />
              <Text style={styles.hourTemperature}>{item.temp_c}°C</Text>
            </View>
          )}
        />

        <FlatList
          data={data.forecast.forecastday}
          renderItem={({ item }) => <Card fecha={item.date} iko={item.day.condition.icon} max={item.day.maxtemp_c} min={item.day.mintemp_c} />}
        />

        <StatusBar style="auto" />
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      {load ? <LScreen /> : <ActivityIndicator size="large" color="#0000ff" />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F0F2',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 30,
    textAlign: 'center',
    color: '#3A3B3C',
  },
  currentTemperature: {
    fontSize: 48,
    fontWeight: '300',
    textAlign: 'center',
    color: '#5A5B5C',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    marginVertical: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  weatherIcon: {
    width: 60,
    height: 60,
  },
  temperature: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4A4B4D',
  },
  condition: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 18,
    color: '#6A6B6D',
  },
  hourlyContainer: {
    alignItems: 'center',
    marginHorizontal: 12,
    backgroundColor: '#F9FAFB',
    borderRadius: 10,
    padding: 10,
  },
  hour: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7A7B7D',
  },
  hourIcon: {
    width: 45,
    height: 45,
  },
  hourTemperature: {
    fontSize: 18,
    color: '#9A9B9D',
  },
});
