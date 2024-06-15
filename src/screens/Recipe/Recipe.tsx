import React, {useCallback} from 'react';
import {SafeAreaView, View, Text, ScrollView} from 'react-native';
import styles from './Recipe.style';
import Button from '../../components/Button/Button';
import Config from 'react-native-config';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import useFetch from '../../hooks/useFetch';
import openYoutubeURL from './openYoutubeURL';
import FastImage from 'react-native-fast-image';

const Recipe = ({route}: any) => {
  const {mealId, mealName} = route.params;

  const {loading, data, error} = useFetch(
    Config.API_URL + Config.LOOKUP_MEAL_BY_ID + mealId,
  );

  const handlePressWatchYoutube = useCallback(openYoutubeURL, []);

  if (loading) {
    return <Loading />;
  }

  if (error || !data.meals) {
    return <Error />;
  }

  if (data.meals) {
    const meal = data.meals[0];
    // console.log(meal.strYoutube);
    const ingredientIds: string[] = [];
    for (let i = 1; i <= 20; i++) {
      if (meal['strIngredient' + i]) {
        ingredientIds.push(i.toString());
      }
    }
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FastImage
            style={styles.image}
            source={{uri: meal.strMealThumb, priority: FastImage.priority.high}}
            resizeMode={FastImage.resizeMode.cover}
          />
          <View style={styles.title_container}>
            <Text style={styles.title}>{meal.strMeal}</Text>
            <Text style={styles.subtitle}>{meal.strArea}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.instruction_container}>
            <Text style={styles.instruction_title}>Ingredients:</Text>
            {ingredientIds.map(id => (
              <Text style={styles.ingredient} key={id}>
                - {meal['strMeasure' + id]} of {meal['strIngredient' + id]}
              </Text>
            ))}
            <Text style={[styles.instruction_title, {marginTop: 8}]}>
              Instructions:
            </Text>
            <Text style={styles.instructions}>{meal.strInstructions}</Text>
            <Button
              text="Watch on Youtube"
              onPress={() => handlePressWatchYoutube(meal.strYoutube, false)}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
};

export default Recipe;
