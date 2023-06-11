import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Dev_Height = Dimensions.get('window').height;
const Dev_Width = Dimensions.get('window').width;

export default Styles = StyleSheet.create({
  text_favoritos: {
    fontSize: 10,
    fontFamily: 'AntonRegular',
    textAlign: 'center',
    color: '#F4E9DC',
  },
  container_App: {
    flex: 1,
    backgroundColor: '#3B5BA5',
    //padding: 8,
  },
  container_Main: {
    flex: 1,
    backgroundColor: '#3B5BA5',

  },
  icon_App: {
    position: 'relative',
    width: '15%',
  },
  option_Main: {
    borderRadius: 25,
    height: '25%',
    margin: 10,
    padding: 40,
  },
  detailsCard: {
    justifyContent: 'center',
    backgroundColor: '#F4E9DC',
    borderRadius: 25,
    height: '80%',
    margin: 10,
    padding: 40,
  },
  title_Main: {
    fontSize: 50,
    fontFamily: 'AntonRegular',
    zIndex: 3,
    textAlign: 'left',
    color: '#494949',
  },
  title_Main_Intro: {
    fontSize: 30,
    fontFamily: 'AntonRegular',
    textAlign: 'left',
    color: '#F4E9DC',
    padding: 20,
  },
  title_Low: {
    fontSize: 15,
    fontFamily: 'AntonRegular',
    textAlign: 'left',
    zIndex: 3,
    color: '#494949',
  },

  container_Category: {
    flex: 1,
    backgroundColor: '#3B5BA5',
  },
  fondoCircle: {
    backgroundColor: '#494949',
     zIndex: 2
   
  },
  flatList_Category: {
    backgroundColor: '#3B5BA5',
    paddingLeft: 10
    //alignItems: 'center'
  },
  spacing_Category: {
    width: 20,
  },
  box_Category: {
    backgroundColor: '#3B5BA5',
    borderWidth: 2,
    borderColor: '#F4E9DC',
    borderRadius: 20,
    padding: 4,
    marginBottom: 5,
    color: '#F4E9DC',
    paddingHorizontal: 20,
    fontFamily: 'AntonRegular',
    fontSize: 40,
  },
  loading_Category: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container_Product: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#494949',
    borderRadius: 10,
    width: width - 20,
  },
  title_Product: {
    fontSize: 30,
    fontFamily: 'AntonRegular',
    textAlign: 'center',
  },
  img_Product: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  contanier: {
    height: Dev_Height,
    width: Dev_Width,
    display: 'flex',
    flexDirection: 'column',
  },

  middlebar: {
    position: 'relative',
    height: '80%',
    width: '70%',
    left: '12%',
    alignItems: 'center',
  },

  theme_name: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'AntonRegular',
    marginLeft: '-5%',
    maxWidth: Dev_Width * 0.9,
    textAlignVertical: 'center',
  },
  low_text: {
    fontSize: 15,
    fontFamily: 'AntonRegular',
    marginLeft: '-5%',
  },
  low_text_desplazar: {
    fontSize: 15,
    fontFamily: 'AntonRegular',
    alignSelf: 'center',
    justifyContent: 'center',
    color: '#F4E9DC'
  },
  frameImage: {
    position: 'relative',
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  cabezasImage: {
    width: 300,
    height: 100,
    zIndex: 1,
    resizeMode: 'stretch',
    left: 40
  },

  frameLogo: {
    position: 'absolute',
    width: '20%',
    height: '20%',
    zIndex: 2,
    left: '-5%',
    top: '24%',
  },
  bgCircle: {
    position: 'absolute',
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    zIndex: 0,
    right: '-40%',
    transform: [{ scale: 0.8 }],
  },
  bgCircle2: {
    position: 'absolute',
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    zIndex: 0,
    right: '40%',
    top: '70%',
    transform: [{ scale: 0.7 }],
  },

  illustrationImage: {
    position: 'absolute',
    alignSelf: 'center',
    top: Dev_Height * 0.1,
    left: Dev_Width * 0.1,
    width: Dev_Width * 0.75,
    height: Dev_Height * 0.35,
  },
  upper_text_view: {
    position: 'absolute',
    display: 'flex',
    top: '13%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: '10%',
    marginRight: '40%',
    alignItems: 'flex-start',
    width: Dev_Width,
    maxWidth: Dev_Width * 0.9,
    maxHeight: Dev_Height * 0.2,
    height: '10%',
    zIndex: 3,
  },
  middle_text_view: {
    position: 'absolute',
    display: 'flex',
    top: '14%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    width: Dev_Width,
    height: '10%',
    zIndex: 3,
    marginLeft: '20%',
    marginRight: '30%',
  },
  bot_text_view: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    width: Dev_Width,
    height: '5%',
    zIndex: 3,
    marginLeft: '20%',
    marginRight: '30%',
    top: '59%',
  },
  name_of_song_Text1: {
    fontSize: 15,
    textAlign: 'right',
    fontFamily: 'AntonRegular',
    adjustsFontSizeToFit: true,
  },
  cardName: {
    marginLeft: '30%',
    marginRight: '40%',
  },
});
