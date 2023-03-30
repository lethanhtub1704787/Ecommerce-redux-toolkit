import {View, Text, Dimensions, FlatList} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '@/Components/CustomHeader';
import {styles} from './styles';
import {SceneMap, TabView, TabBar} from 'react-native-tab-view';

import OrderCard from './OrderCard';
import {orders_xample} from './model';

const WIDTH = Dimensions.get('window').width;

const renderItem = ({item, index}: {item: any; index: number}) => {
  return <OrderCard key={item.id} />;
};

const CompletedTab = () => {
  return (
    <View style={styles.completedTabStyle}>
      <FlatList
        data={orders_xample}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const CancelledTab = () => {
  return (
    <View style={styles.completedTabStyle}>
      <OrderCard />
    </View>
  );
};

// const renderLabel = ({route}: any) => {
//   return <Text style={{fontWeight: '500'}}>{route.title}</Text>;
// };

const renderTabBar = (props: any) => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicatorStyle}
    style={styles.tabBarStyle}
    // renderLabel={renderLabel}
    labelStyle={styles.labelStyle}
    activeColor="#F67952"
    inactiveColor="rgba(0, 0, 0, 0.5)"
  />
);

const renderScene = SceneMap({
  first: CompletedTab,
  second: CancelledTab,
});

const Orders = () => {
  const [index, setIndex] = useState<number>(0);
  const [routes] = useState([
    {key: 'first', title: 'Completed'},
    {key: 'second', title: 'Cancelled'},
  ]);
  return (
    <View style={{flex: 1}}>
      <CustomHeader text={'My Orders'} goBack={true} />
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{width: WIDTH}}
      />
    </View>
  );
};

export default Orders;
