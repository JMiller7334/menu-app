/* All styling for all pages will go here
    Naming conventions will have to start with page name
    ~PW
*/

// import Colors from './colorsdict';
import {StyleSheet} from 'react-native';
import {Colors} from './colorsdict'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.darkGrey,
    flex: 1,
    alignItems: 'center', // Center secondary axis
    justifyContent: 'center', // Center main axis

  },
  header: {
    width: '100%',
    flex: 0.4,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: Colors.darkGreen,
    paddingRight: 10,
    paddingLeft: 10
  },
  title: {
    marginBottom: 20,
    fontSize: 50,
    color: Colors.lightGrey
  },
  dropdown: {
    flex: 1,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'flex-end'
  },
  button: {
    width: 60
  },
  scrollView: {
    flex: 1,
    width: '100%',
    paddingLeft: 50,
    backgroundColor: Colors.darkGrey
  },
  footer: {
    position: 'absolute',
    width: '100%',
    height: '10%',
    padding: 20,
    paddingBottom: 100,
    bottom: 0,
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    aligncontent: 'center',
    backgroundColor: Colors.lightGreen
  },
  footerordersbuttoncontainer: {
    backgroundColor: Colors.darkGreen,
    padding: 10,
    width: 130,
    height: 50,
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footeraddbuttoncontainer: {
    backgroundColor: Colors.darkGreen,
    padding: 0,
    width: 50,
    height: 50,
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerbutton: {    
    fontSize: 30,
    color: '#ffffff'
  },
  item: {
      padding: 20,
      paddingBottom: 50
  },
  
  menuTitle: {
      color: Colors.lightGrey,
      fontSize: 24,
  },
  category: {
      marginTop: 50,
      fontSize: 48,
      color: Colors.lightGreen,
  }
})