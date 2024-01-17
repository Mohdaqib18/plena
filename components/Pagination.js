import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Pagination = ({data}) => {
  return (
    <View style={styles.container}>
      {data.map((item,index) => {
        return <View key={index} style={styles.dot}></View>
      })}
    </View>
  )
}

export default Pagination

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		flexDirection: "row",
		bottom: 20,
		left: 20,
	},
	dot: {
		width: 19,
		height: 5,
		borderRadius: 4,
		marginHorizontal: 5,
		backgroundColor: "#E4E4E4",
	},
});