import 'dart:convert';

class ApiProcessing {
  messageProcessing(String res) {
    var convert = json.decode(res);
    return convert;
  }
}