import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
      },
      ContainerTitle:{
        color:'#ffffff',
        marginTop:50,
        
        backgroundColor: '#ff5f7c',
      },
      title:{
        fontSize:20,
        marginStart:'30%',
        color:'#ffffff',
      },
      itemList: {
        flex: 1,
        marginVertical: 20,
        marginHorizontal: 20,
      },
      itemContainer: {
        flex: 1,
        marginVertical: 5,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        backgroundColor: '#9F84BD',
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      item: {
        fontSize: 16,
        color: '#000000',
      },
      delete: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff'
      },
      modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        paddingVertical: 20,
      },
      modalTitle: {
        fontSize: 16
      },
      modalMessageContainer : {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
      },
      modalMessage: {
        fontSize: 14,
      },
      selectedTask: {
        fontSize: 16,
        color: '#000000',
        fontWeight: 'bold',
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 20,
      },
      button: {
        backgroundColor: '#ff5f7c',
        padding: 10,
        borderRadius: 10,
      }

})