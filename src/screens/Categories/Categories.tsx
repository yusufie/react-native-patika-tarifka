import React, {FlatList, SafeAreaView} from 'react-native';
import Config from 'react-native-config';
import CategoryItem from '../../components/CategoryItem/CategoryItem';
import Error from '../../components/Error/Error';
import Loading from '../../components/Loading/Loading';
import styles from './Categories.style';
import useFetch from '../../hooks/useFetch';

const Categories = ({navigation}: any) => {
  const {loading, data, error} = useFetch(
    Config.API_URL + Config.LIST_CATEGORIES,
  );

  const handleOnPressCategory = (categoryId: string, categoryName: string) => {
    // console.log('Selected Category Name: ' + categoryName);
    navigation.navigate('Meals', {categoryName: categoryName});
  };

  const renderCategory = ({item}: any) => (
    <CategoryItem item={item} onPress={handleOnPressCategory} />
  );

  if (loading) {
    return <Loading />;
  }

  if (error || !data.categories) {
    return <Error />;
  }

  if (data.categories) {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data.categories}
          renderItem={renderCategory}
          keyExtractor={item => item.idCategory.toString()}
        />
      </SafeAreaView>
    );
  }
};

export default Categories;
