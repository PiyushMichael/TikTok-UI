import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, Dimensions } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { coverImage, Friend1, Friend2, Friend3, Commentors } from 'constants/Data';
import {
  themeOrange,
  themeYellow,
  themeGrey,
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
  shareGradient1,
  shareGradient2,
} from 'constants/Colors';

const { width, height} = Dimensions.get('screen');

const Screen2 = () => {
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

  const renderFriendThumb = (url, color, small) => (
    <View>
      <FontAwesome5Icon name="crown" color={color} size={small ? 10 : 12} style={crownStyle(small)} />
      <View style={friendStyle(color, small)}>
        <Image source={{ uri: url }} style={friendImageStyle(small)} />
      </View>
    </View>
  );

  const renderIcon = (commentor) => {
    let gradient1 = starIconGradient1;
    let gradient2 = starIconGradient2;
    if (commentor.icon === 'moon') {
      gradient1 = moonIconGradient1;
      gradient2 = moonIconGradient2;
    }
    if (commentor.icon === 'shield') {
      gradient1 = shieldIconGradient1;
      gradient2 = shieldIconGradient2;
    }
    if (commentor.icon === 'paw') {
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
        <View style={iconBoxStyle(commentor.icon)}>
          {renderSubIcon(commentor.icon)}
        </View>
        <Text style={styles.iconText}>{commentor.stats}</Text>
      </LinearGradient>
    );
  };

  const renderCommentors = () => {
    return (
      <View>
        {Commentors.map((commentor, index) => (
          <View key={index.toString().concat('commentor')} style={styles.commentRow}>
            {renderIcon(commentor)}
            <Text style={styles.commentName}>{commentor.name}:</Text>
            <Text style={styles.commentContent}>{commentor.comment}</Text>
          </View>
        ))}
      </View>
    );
  };

  return (
    <View>
      <ImageBackground source={{ uri: coverImage }} style={styles.container}>
        <LinearGradient
          start={{ x: 0, y: 0.6 }}
          end={{ x: 0, y: 1 }}
          colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.4)']}
          style={styles.thumbGradient}
        >
          <View>
            <View style={styles.topRow}>
              <View style={styles.topRowLeft}>
                <Image source={{ uri: coverImage }} style={styles.userThumb} />
                <View style={styles.userInfoBox}>
                  <Text style={styles.username}>Stella Malone</Text>
                  <View style={styles.litBox}>
                    <MaterialIcon name="local-fire-department" color="#fff" size={12} />
                    <Text style={styles.litNumber}>1263</Text>
                  </View>
                </View>
                <View style={styles.plusContainer}>
                  <EntypoIcon name="plus" color="#fff" size={18} />
                </View>
              </View>
              <View style={styles.topRowRight}>
                {renderFriendThumb(Friend1, themeYellow)}
                {renderFriendThumb(Friend2, themeGrey)}
                {renderFriendThumb(Friend3, themeOrange, true)}
                <View style={styles.crossContainer}>
                  <AntDesignIcon name="close" color="#fff" size={20} />
                </View>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.secondRow}>
                <View style={styles.starContainer}>
                  <AntDesignIcon name="star" size={12} color="rgb(235,135,0)" />
                </View>
                <Text style={styles.starFigure}>5324760</Text>
                <View style={styles.rightContainer}>
                  <FontAwesome5Icon name="chevron-right" size={12} color="#000" />
                </View>
              </View>
            </View>
          </View>
          <View>
            {renderCommentors()}
            <View style={styles.row}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={[shareGradient1, shareGradient2]}
                style={styles.shareButton}
              >
                <MaterialCommunityIcon name="send-circle-outline" size={22} color={primaryIconColor} />
                <Text style={styles.shareText}>Share with friends</Text>
              </LinearGradient>
            </View>
            <View style={styles.bottomRow}>
              <View style={styles.row}>
                <View style={styles.bottomIconContainer}>
                  <AntDesignIcon name="message1" size={20} color={primaryIconColor} />
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.bottomIconContainer}>
                  <MaterialCommunityIcon name="video-outline" size={24} color={primaryIconColor} />
                </View>
                <View style={styles.bottomIconContainer}>
                  <MaterialIcon name="mail-outline" size={22} color={primaryIconColor} />
                </View>
                <View style={styles.bottomIconContainer}>
                  <MaterialCommunityIcon name="send-circle-outline" size={24} color={primaryIconColor} />
                </View>
                <View style={styles.giftIconContainer}>
                  <MaterialCommunityIcon name="gift" size={28} color={primaryIconColor} />
                </View>
              </View>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const friendStyle = (color, small) => ({
  width: small ? 32 : 36,
  height: small ? 32 : 36,
  borderRadius: small ? 16 : 18,
  borderWidth: 2,
  borderColor: color,
  marginRight: 8,
});

const friendImageStyle = (small) => ({
  width: small ? 28 : 32,
  height: small ? 28 : 32,
  borderRadius: small ? 14 : 16,
});

const crownStyle = (small) => ({
  position: 'absolute',
  top: small ? -5 : -6,
  left: small ? -3 : -3,
  transform: [
    { rotateZ: '315deg' },
  ],
});

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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    width,
    height,
  },
  thumbGradient: {
    width,
    height,
    paddingVertical: 40,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topRowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 22,
  },
  userThumb: {
    height: 32,
    width: 32,
    borderRadius: 16,
  },
  userInfoBox: {
    marginHorizontal: 4,
  },
  username: {
    fontSize: 12,
    color: '#fff',
  },
  litBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  litNumber: {
    fontSize: 10,
    color: '#fff',
  },
  plusContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 28,
    width: 28,
    borderRadius: 14,
    marginHorizontal: 2,
    backgroundColor: themeOrange,
  },
  topRowRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  crossContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 32,
    width: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: primaryIconColor,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  secondRow: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 22,
  },
  starContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: 'rgb(243,231,119)',
  },
  starFigure: {
    fontSize: 12,
    color: '#fff',
    marginHorizontal: 4,
  },
  rightContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 2,
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: '#eee',
  },
  commentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  commentName: {
    fontSize: 13,
    color: '#fff',
    marginHorizontal: 4,
  },
  commentContent: {
    fontSize: 13,
    color: themeYellow,
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
  shareButton: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  shareText: {
    marginLeft: 4,
    fontSize: 14,
    color: primaryIconColor,
  },
  bottomRow: {
    marginVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottomIconContainer: {
    marginRight: 16,
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(40,40,40,0.4)',
  },
  giftIconContainer: {
    height: 48,
    width: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: themeOrange,
  },
});

export default Screen2;
