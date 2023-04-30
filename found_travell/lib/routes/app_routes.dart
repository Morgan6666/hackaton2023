


import 'package:flutter/cupertino.dart';
import 'package:found_travell/presentation/road/road_screen.dart';
import 'package:found_travell/presentation/road/add_attractions.dart';
import 'package:found_travell/presentation/road/add_events.dart';
import 'package:found_travell/presentation/road/add_food_screen.dart';
import 'package:found_travell/presentation/road/widget/get_events_info.dart';
import 'package:found_travell/presentation/road/widget/get_food_info.dart';
import 'package:found_travell/presentation/road/widget/get_relax_info.dart';
import 'package:found_travell/presentation/roadmap/roadmap_screen.dart';

class AppRoutes {
  static const String hobbyScreen = '/hobby_screen';
  static String roadMapScreen = '/road_map_screen';
  static String roadScreen = '/road_screen';
  static String addFoodScreen = '/add_food_screen';
  static String addEventScreen = '/add_event_screen';
  static String addAttractionsScreen = '/add_attraction_screen';
  static String getEventsInfoScreen = '/get_events_info_screen';
  static String getFoodInfoScreen = '/get_food_screen';
  static String getRelaxInfoScreen = '/get_relax_info_screen';

  static Map<String, WidgetBuilder> routes = {
      roadMapScreen: (context) => RoadMapInfoScreen().build(context),
      roadScreen: (context) => RoadScreen().build(context),
    addFoodScreen: (context) => AddFoodScreen().build(context),
    addEventScreen: (context) => AddEventScreen().build(context),
    addAttractionsScreen: (context) => AddAttractionScreen().build(context),
    getEventsInfoScreen: (context) => GetEventsInfoScreen().build(context),
    getFoodInfoScreen: (context) => GetFoodInfoScreen().build(context),
    getRelaxInfoScreen: (context) => GetRelaxInfoScreen().build(context)


  };
}
