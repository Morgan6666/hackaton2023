
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:found_travell/presentation/roadmap/roadmap_screen.dart';
import 'package:found_travell/routes/app_routes.dart';


void main() {
  WidgetsFlutterBinding.ensureInitialized();
  SystemChrome.setPreferredOrientations([
    DeviceOrientation.portraitUp,
  ]);
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
        visualDensity: VisualDensity.standard,
      ),
      title: 'found_travell',
      debugShowCheckedModeBanner: false,
      initialRoute: AppRoutes.roadScreen,
      routes: AppRoutes.routes
    );
  }
}