from flask import Flask, render_template, jsonify

app = Flask(__name__)

#test

@app.route("/start", methods=["POST","GET"])
def result():
    return jsonify({"Message":"Hello, World"})

if __name__ == '__main__':
    app.run(debug=True)

