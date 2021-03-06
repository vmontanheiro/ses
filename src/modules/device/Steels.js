import React from 'react';
import {Icon} from 'native-base';
import {Text, StyleSheet, View, TouchableOpacity, FlatList, Image} from 'react-native';
import theme from '../theme';
import {STEELS} from '../../constants';

const Steels = ({onSteelChange, steel, result}) => {
  return (
    <View style={styles.optionContainer}>
      <FlatList
        style={styles.flatlist}
        data={STEELS}
        keyExtractor={(row) => row.value}
        numColumns={2}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({item: {label, subLabel, image, value}}) => (
          <TouchableOpacity
            style={[
              styles.optionHandle,
              {borderColor: steel === value ? theme.color.blue4 : theme.color.white},
            ]}
            onPress={() => {
              onSteelChange(value);
            }}>
            <View style={styles.optionContent}>
              {steel === value ? (
                <Icon
                  style={[styles.optionIcon, {color: theme.color.blue2}]}
                  name="radio-button-on-outline"
                />
              ) : (
                <Icon style={styles.optionIcon} name="radio-button-off-outline" />
              )}
              <View style={styles.optionImageBox}>
                <Image style={styles.image} source={image} />
              </View>
            </View>
            <View style={styles.optionTextBox}>
              <Text style={styles.optionText}>{label}</Text>
              <Text>{subLabel}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      {!!result && (
        <View style={[styles.resultContainer, {backgroundColor: result.backgroundColor}]}>
          <Text style={[styles.resultBox, {color: result.color}]}>{`${result.label}`}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  flatlist: {
    flex: 1,
    borderTopColor: theme.color.white,
    borderTopWidth: 2,
  },
  optionContainer: {
    flex: 1,
    flexDirection: `column`,
    justifyContent: `flex-end`,
    alignItems: `center`,
    width: `100%`,
  },
  contentContainerStyle: {
    flexDirection: `row`,
    justifyContent: `space-between`,
    borderTopColor: theme.color.white,
    borderTopWidth: 2,
  },
  optionHandle: {
    flexDirection: `column`,
    width: `50%`,
    backgroundColor: theme.color.blue6,
    justifyContent: `center`,
    alignItems: `center`,
    height: 130,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 3,
    borderWidth: 2,
  },
  optionContent: {
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-end`,
    width: `100%`,
  },
  optionIcon: {
    position: `relative`,
    top: 10,
  },
  optionImageBox: {
    flex: 0.8,
    flexDirection: `row`,
    justifyContent: `center`,
    alignItems: `center`,
    width: `100%`,
  },
  optionTextBox: {
    flexDirection: `column`,
    justifyContent: `flex-end`,
    alignItems: `center`,
  },
  optionText: {
    textAlign: `center`,
    paddingTop: 5,
  },
  resultContainer: {
    borderRadius: 3,
    borderTopColor: theme.color.white,
    borderTopWidth: 3,
    justifyContent: `center`,
    alignItems: `center`,
    width: `100%`,
    padding: 15,
    backgroundColor: theme.color.blue6,
  },
  resultBox: {
    fontSize: 16,
    color: theme.color.blue2,
    fontWeight: `bold`,
    textShadowColor: `rgba(0, 0, 0,0.3)`,
    textShadowOffset: {width: 0.1, height: 0.2},
    textShadowRadius: 1,
  },
});

export default Steels;
