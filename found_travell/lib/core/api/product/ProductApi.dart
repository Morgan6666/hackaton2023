

import 'dart:convert';
import 'dart:io';

import 'package:found_travell/core/api/base/ApiProcessing.dart';
import 'package:found_travell/core/api/product/ProductUrl.dart';
import 'package:http/http.dart' as http;

class ProductApi extends ApiProcessing {

  Future addEvent(String name, String description, String category_name,
      String time_start, String time_end, int user_id, String city_name) async {
    try {
      Map<String, String> reqHeaders = {
        'Content-Type': 'application/json',
      };
      final body = jsonEncode({
        "name": name,
        "description": description,
        "category_name": category_name,
        "time_start": time_start,
        "time_end": time_end,
        "user_id": user_id,
        "city_name": city_name
      });
      final res = await http.post(
          Uri.parse(ProductUrl.addEventsUrl), body: body, headers: reqHeaders);
      final resApi = res.body.toString();
      final result = messageProcessing(resApi);
      return result;
    } on SocketException {
      return 'Нестабильное соединение';
    }

  }
  Future addShop(String name, String description, String category_name,
      String time_start, String time_end, int user_id, String city_name) async {
    try {
      Map<String, String> reqHeaders = {
        'Content-Type': 'application/json',
      };
      final body = jsonEncode({
        "name": name,
        "description": description,
        "category_name": category_name,
        "time_start": time_start,
        "time_end": time_end,
        "user_id": user_id,
        "city_name": city_name
      });
      final res = await http.post(
          Uri.parse(ProductUrl.addShopUrl), body: body, headers: reqHeaders);
      final resApi = res.body.toString();
      final result = messageProcessing(resApi);
      return result;
    } on SocketException {
      return 'Нестабильное соединение';
    }

  }

  Future addAttraction(String name, String description, String category_name,
      String time_start, String time_end, int user_id, String city_name) async {
    try {
      Map<String, String> reqHeaders = {
        'Content-Type': 'application/json',
      };
      final body = jsonEncode({
        "name": name,
        "description": description,
        "category_name": category_name,
        "time_start": time_start,
        "time_end": time_end,
        "user_id": user_id,
        "city_name": city_name
      });
      final res = await http.post(
          Uri.parse(ProductUrl.addAttractionsUrl), body: body, headers: reqHeaders);
      final resApi = res.body.toString();
      final result = messageProcessing(resApi);
      return result;
    } on SocketException {
      return 'Нестабильное соединение';
    }
  }

  Future getShops() async {
    try{
      Map<String, String> reqHeaders = {
        'Content-Type': 'application/json',
      };
      final res = await http.get(Uri.parse(ProductUrl.getShops), headers: reqHeaders);
      final resApi = res.body.toString();
      final result = messageProcessing(resApi);
      final data = result['Content'];
      return data;

    } on SocketException{
      return 'Нестабильное соединение';
    }

  }
  Future getAttractions() async {
    try{
      Map<String, String> reqHeaders = {
        'Content-Type': 'application/json',
      };
      final res = await http.get(Uri.parse(ProductUrl.getAttractions), headers: reqHeaders);
      final resApi = res.body.toString();
      final result = messageProcessing(resApi);
      final data = result['Content'];
      return data;

    } on SocketException{
      return 'Нестабильное соединение';
    }

  }

  Future getEvents() async {
    try{
      Map<String, String> reqHeaders = {
        'Content-Type': 'application/json',
      };
      final res = await http.get(Uri.parse(ProductUrl.getEvents), headers: reqHeaders);
      final resApi = res.body.toString();
      final result = messageProcessing(resApi);
      final data = result['Content'];
      return data;

    } on SocketException{
      return 'Нестабильное соединение';
    }

  }
  Future getRelax() async {
    try{
      Map<String, String> reqHeaders = {
        'Content-Type': 'application/json',
      };
      final res = await http.get(Uri.parse(ProductUrl.getRelax), headers: reqHeaders);
      final resApi = res.body.toString();
      final result = messageProcessing(resApi);
      final data = result['Content'];
      return data;

    } on SocketException{
      return 'Нестабильное соединение';
    }

  }

  Future getRoadMapInfo(int id) async {
    try{
      Map<String, String> reqHeaders = {
        'Content-Type': 'application/json',
      };
      final res= await http.post(Uri.parse(ProductUrl.getMapInfoUrl), headers: reqHeaders);
      final resApi = res.body.toString();
      final result = messageProcessing(resApi);
      final data = result['Content'];
      return data;

    } on SocketException {
      return 'Нестабильное соединение';
    }
  }

  Future updateShop(String name, String description, String time_start, String time_end,int road_map_id, int user_id, city_name) async {
    try{
      Map<String, String> reqHeaders = {
        'Content-Type': 'application/json',
      };
      final body = jsonEncode({
        "name": name,
        "description": description,
        "time_start": time_start,
        "time_end": time_end,
        "road_map_id": road_map_id,
        "user_id": user_id,
        "city_name": city_name
      });
      final res = await http.post(
        Uri.parse(ProductUrl.updateShopUrl), body: body, headers: reqHeaders
      );
      final resApi = res.body.toString();
      final result = messageProcessing(resApi);
      return result;
    } on SocketException {
      return 'Нестабильное соединение';
    }
  }

  Future updateAttractions(String name, String description, String time_start, String time_end,int road_map_id, int user_id, String city_name) async {
    try{
      Map<String, String> reqHeaders = {
        'Content-Type': 'application/json',
      };
      final body = jsonEncode({
        "name": name,
        "description": description,
        "time_start": time_start,
        "time_end": time_end,
        "road_map_id": road_map_id,
        "user_id": user_id,
        "city_name": city_name
      });
      final res = await http.post(
          Uri.parse(ProductUrl.updateAttractionUrl), body: body, headers: reqHeaders
      );
      final resApi = res.body.toString();
      final result = messageProcessing(resApi);
      return result;
    } on SocketException {
      return 'Нестабильное соединение';
    }
  }

  Future updateEvents(String name, String description, String time_start, String time_end,int road_map_id, int user_id, String city_name) async {
    try{
      Map<String, String> reqHeaders = {
        'Content-Type': 'application/json',
      };
      final body = jsonEncode({
        "name": name,
        "description": description,
        "time_start": time_start,
        "time_end": time_end,
        "road_map_id": road_map_id,
        "user_id": user_id,
        "city_name": city_name
      });
      final res = await http.post(
          Uri.parse(ProductUrl.updateEventsUrl), body: body, headers: reqHeaders
      );
      final resApi = res.body.toString();
      final result = messageProcessing(resApi);
      return result;
    } on SocketException {
      return 'Нестабильное соединение';
    }
  }

  Future updateRelax(String name, String description, String time_start, String time_end,int road_map_id, int user_id, String city_name) async {
    try{
      Map<String, String> reqHeaders = {
        'Content-Type': 'application/json',
      };
      final body = jsonEncode({
        "name": name,
        "description": description,
        "time_start": time_start,
        "time_end": time_end,
        "road_map_id": road_map_id,
        "user_id": user_id,
        "city_name": city_name
      });
      final res = await http.post(
          Uri.parse(ProductUrl.updateRelaxUrl), body: body, headers: reqHeaders
      );
      final resApi = res.body.toString();
      final result = messageProcessing(resApi);
      return result;
    } on SocketException {
      return 'Нестабильное соединение';
    }
  }


  Future addRelax(String name, String description, String category_name,
      String time_start, String time_end, int user_id, String city_name) async {
    try {
      Map<String, String> reqHeaders = {
        'Content-Type': 'application/json',
      };
      final body = jsonEncode({
        "name": name,
        "description": description,
        "category_name": category_name,
        "time_start": time_start,
        "time_end": time_end,
        "user_id": user_id,
        "city_name": city_name
      });
      final res = await http.post(
          Uri.parse(ProductUrl.addRelaxUrl), body: body, headers: reqHeaders);
      final resApi = res.body.toString();
      final result = messageProcessing(resApi);
      return result;
    } on SocketException {
      return 'Нестабильное соединение';
    }
  }

  Future addUserQuest(String quest_name, int user_id) async {
      try{
        Map<String, String> reqHeaders = {
          'Content-Type': 'application/json',
        };
        final body= jsonEncode({
          "quest_name": quest_name,
          "user_id": user_id
        });
        final res = await http.post(Uri.parse(ProductUrl.addUserQuestUrl), body: body, headers: reqHeaders);
        final resApi = res.body.toString();
        final result = messageProcessing(resApi);
        return result;
      }
      on SocketException {
        return 'Нестабильное соединение';
      }
  }

  Future getUserQuestInfo(int user_id) async {
    try{
      Map<String, String> reqHeaders = {
        'Content-Type': 'application/json',
      };
      final body = jsonEncode({
        "user_id": user_id
      });
      final res = await http.post(Uri.parse(ProductUrl.getUserQuestInfoUrl), body: body, headers: reqHeaders);
      final resApi = res.body.toString();
      final result = messageProcessing(resApi);
      return result;
    } on SocketException {
      return 'Нестабильное  соединение';
    }
  }

  Future updateStatus(String status_name, int user_id, String quest_name, String ethaps_name) async {
    try{
      Map<String, String> reqHeaders = {
        'Content-Type': 'application/json',
      };
      final body = jsonEncode({
        "status_name": status_name,
        "user_id": user_id,
        "quest_name": quest_name,
        "ethaps_name": ethaps_name
      });
      final res = await http.post(Uri.parse(ProductUrl.updateQuestStatusUrl), body:  body, headers: reqHeaders);
      final resApi = res.body.toString();
      final result = messageProcessing(resApi);
      return result;
    } on SocketException{
      return 'Нестабильное соединение';
    }
  }
}
