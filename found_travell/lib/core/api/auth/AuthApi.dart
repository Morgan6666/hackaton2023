

import 'dart:convert';
import 'dart:io';

import 'package:found_travell/core/api/auth/AuthUrl.dart';
import 'package:found_travell/core/api/base/ApiProcessing.dart';
import 'package:http/http.dart' as http;

class AuthApi extends ApiProcessing {
  Future sign(String firstName, String lastName, String email,
      String password) async {
    try {
      Map<String, String> reqHeaders = {
        'Content-Type': 'application/json',
      };
      final body = jsonEncode({
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "password": password
      });
      final res = await http.post(
          Uri.parse(AuthUrl.signUrl), body: body, headers: reqHeaders
      );
      final resApi = res.body.toString();
      final result = messageProcessing(resApi);
      return result;
    } on SocketException {
      return 'Соединение не стабильно';
    }
  }

  Future login(String email, String password) async {
    try{
      Map<String, String> reqHeaders = {
        'Content-Type': 'application/json',
      };
      final body = jsonEncode({
        "email": email,
        "password": password
      });
      final res = await http.post(Uri.parse(AuthUrl.loginUrl), body: body, headers: reqHeaders);
      final resApi  = res.body.toString();
      final result = messageProcessing(resApi);
      return result;
    } on SocketException {
      return 'Соединение не стабильно';
    }
  }

  Future changePassword(String email, String password, String newPassword) async{
    try{
      Map<String, String> reqHeaders = {
        'Content-Type': 'application/json',
      };
      final body = jsonEncode({
        "email": email,
        "password": password,
        "newPassword": newPassword
      });
      final res = await http.post(Uri.parse(AuthUrl.change), body:  body, headers: reqHeaders);
      final resApi = res.body.toString();
      final result = messageProcessing(resApi);
      return result;
    } on SocketException {
      return 'Соединение не стабильно';
    }
  }
}