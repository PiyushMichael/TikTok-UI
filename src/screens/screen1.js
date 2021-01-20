import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ImageBackground, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {
  primaryGradientColor1,
  primaryGradientColor2,
  primaryIconColor,
  starIcon,
  starIconGradient1,
  starIconGradient2,
  moonIcon,
  moonIconGradient1,
  moonIconGradient2,
  shieldIcon,
  shieldIconGradient1,
  shieldIconGradient2,
  pawIcon,
  pawIconGradient1,
  pawIconGradient2,
} from 'constants/Colors';
import { Influencers } from 'constants/Data';

const { width } = Dimensions.get('screen');

const Screen1 = ({navigation}) => {
  const renderSubIcon = (icon) => {
    if (icon === 'moon') {
      return (
        <Ionicon name="moon" color="yellow" size={8} style={styles.iconStyle} />
      );
    }
    if (icon === 'shield') {
      return (
        <MaterialIcon name="shield" color="yellow" size={8} style={styles.iconStyle} />
      );
    }
    if (icon === 'paw') {
      return (
        <FontAwesome5Icon name="paw" color="yellow" size={8} style={styles.iconStyle} />
      );
    }
    return (
      <FontAwesomeIcon name="star" color="yellow" size={8} style={styles.iconStyle} />
    );
  };

  const renderIcon = (influencer) => {
    let gradient1 = starIconGradient1;
    let gradient2 = starIconGradient2;
    if (influencer.icon === 'moon') {
      gradient1 = moonIconGradient1;
      gradient2 = moonIconGradient2;
    }
    if (influencer.icon === 'shield') {
      gradient1 = shieldIconGradient1;
      gradient2 = shieldIconGradient2;
    }
    if (influencer.icon === 'paw') {
      gradient1 = pawIconGradient1;
      gradient2 = pawIconGradient2;
    }
    return (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[gradient1, gradient2]}
        style={styles.iconGradient}
      >
        <View style={iconBoxStyle(influencer.icon)}>
          {renderSubIcon(influencer.icon)}
        </View>
        <Text style={styles.iconText}>{influencer.stats}</Text>
      </LinearGradient>
    );
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[primaryGradientColor1, primaryGradientColor2]}
        style={styles.gradient}
      >
        <FontAwesome5Icon name="crown" color={primaryIconColor} size={20} />
        <View style={styles.headingButtonWrapper}>
          <Text style={styles.headingText}>Feature</Text>
        </View>
        <Text style={styles.headingText}>Nearby</Text>
        <Text style={styles.headingText}>Newest</Text>
        <FeatherIcon name="search" color={primaryIconColor} size={24} />
      </LinearGradient>
      <ScrollView>
        <View style={styles.toggleBar}>
          <View style={styles.toggleMini}>
            <Text style={styles.toggleText}>View all</Text>
            <Icon name="chevron-small-down" color="#bbb" size={24} style={styles.toggleDownIcon} />
          </View>
          <View style={styles.toggleMini}>
            <Icon name="globe" color="#bbb" size={20} style={styles.toggleGlobeIcon} />
            <Text style={styles.toggleText}>Global</Text>
            <Icon name="chevron-small-down" color="#bbb" size={24} style={styles.toggleDownIcon} />
          </View>
        </View>
        <View style={styles.scroll}>
          {Influencers.map((influencer, index) => (
            <TouchableOpacity key={index.toString().concat('influencer')} onPress={() => navigation.navigate('Screen2')}>
              <ImageBackground source={{ uri: influencer.image }} style={styles.thumbnail}>
                <LinearGradient
                  start={{ x: 0, y: 0.8 }}
                  end={{ x: 0, y: 1 }}
                  colors={['rgba(255,255,255,0)', 'rgba(0,0,0,0.4)']}
                  style={styles.thumbGradient}
                >
                  <View style={styles.thumbTop}>
                    <View style={styles.litContainer}>
                      <MaterialIcon name="local-fire-department" color="#fff" size={16} />
                      <Text style={styles.litText}>1263</Text>
                    </View>
                  </View>
                  <View style={styles.thumbBottom}>
                    <Text style={styles.name}>{influencer.name}</Text>
                    {renderIcon(influencer)}
                  </View>
                </LinearGradient>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const iconBoxStyle = (icon) => {
  let color = starIcon;
  if (icon === 'moon') {
    color = moonIcon;
  }
  if (icon === 'shield') {
    color = shieldIcon;
  }
  if (icon === 'paw') {
    color = pawIcon;
  }
  return {
    justifyContent: 'center',
    alignItems: 'center',
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: color,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gradient: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 28,
    height: 40,
    width,
  },
  headingText: {
    color: primaryIconColor,
    fontSize: 15,
  },
  headingButtonWrapper: {
    width: 80,
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  scroll: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -1,
  },
  thumbnail: {
    height: (width / 2) - 1,
    width: (width / 2) - 1,
    margin: 1,
  },
  thumbTop: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  litContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(60,60,60,0.6)',
    paddingVertical: 2,
    paddingLeft: 4,
    paddingRight: 8,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#fff',
  },
  litText: {
    fontSize: 12,
    color: '#fff',
  },
  thumbBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 14,
    color: '#fff',
  },
  thumbGradient: {
    justifyContent: 'space-between',
    height: (width / 2) - 1,
    width: (width / 2) - 1,
    padding: 8,
  },
  iconGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 20,
    width: 40,
    borderRadius: 10,
    paddingVertical: 2,
    paddingLeft: 4,
    paddingRight: 8,
  },
  iconText: {
    fontSize: 10,
    color: '#fff',
  },
  iconStyle: {
    marginLeft: 0,
  },
  toggleBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 1,
    borderBottomWidth: 2,
    borderColor: '#eee',
  },
  toggleMini: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleText: {
    color: '#aaa',
    fontSize: 16,
  },
  toggleDownIcon: {
    marginTop: 4,
    marginLeft: 4,
  },
  toggleGlobeIcon: {
    marginRight: 4,
  },
});

export default Screen1;
