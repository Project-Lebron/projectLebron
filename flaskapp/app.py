from flask import Flask, jsonify
from pymongo.mongo_client import MongoClient
import pymongo
import json
from bson import ObjectId
from gpiozero import DistanceSensor
from gpiozero import MotionSensor
from time import sleep
import time
# Uncomment in production
# import RPi.GPIO as GPIO

# GLOBAL CONSTANT VARIABLES

trigPin = 23
echoPin = 24
uri = "mongodb+srv://lebron:Nh5JGdICwa4hib6S@project-lebron-database.ppmmons.mongodb.net/?retryWrites=true&w=majority"

# INITIALIZATIONS
app = Flask(__name__)

# Avg distance (m)
DISTANCE=.5
# Sleep b/w shots
SLEEP=2
# Know when end button pushed
COMPLETE=False

# Current ID
def get_last_stat():
    latestStat = stats_db.find_one(sort=[('ID', pymongo.DESCENDING)])
    return latestStat

# Custom JSON encoder to handle ObjectId
class CustomJSONEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, ObjectId):
            return str(obj)
        return super().default(obj)
    
# Create a new client and connect to the server
client = MongoClient(uri, tls=True, tlsAllowInvalidCertificates=True)

# Connect to cluster
cluster = client['player_data']
# Connect to db
stats_db = cluster['stats']

@app.route("/start", methods=["GET"])
def result():
    pass

    # Uncomment in production ****
    # distance_sensor = DistanceSensor(echoPin, trigPin)
    # vibration_sensor = MotionSensor(16,threshold=0.01) 
    # *****

    # Sample data (testing)
    # stats_db.delete_many({})
    # stats = [{'ID': 1, 'shotsTaken': 94, 'shotsMade': 15, 'shotsMissed': 79, 'highestStreak': 7, 'streak': 6, 'date': 'Tues Nov 28 21:53:57 2023', 'timeOfSession': 109, 'status': 'complete'},
    # {'ID': 2, 'shotsTaken': 84, 'shotsMade': 46, 'shotsMissed': 38, 'highestStreak': 13, 'streak': 2, 'date': 'Thurs Nov 23 21:53:57 2023', 'timeOfSession': 50, 'status': 'complete'},
    # {'ID': 3, 'shotsTaken': 62, 'shotsMade': 29, 'shotsMissed': 33, 'highestStreak': 13, 'streak': 11, 'date': 'Wed Nov 15 21:53:57 2023', 'timeOfSession': 92, 'status': 'complete'},
    # {'ID': 4, 'shotsTaken': 17, 'shotsMade': 14, 'shotsMissed': 3, 'highestStreak': 2, 'streak': 2, 'date': 'Wed Nov 08 21:53:57 2023', 'timeOfSession': 94, 'status': 'complete'},
    # {'ID': 5, 'shotsTaken': 78, 'shotsMade': 0, 'shotsMissed': 78, 'highestStreak': 0, 'streak': 0, 'date': 'Thurs Nov 02 21:53:57 2023', 'timeOfSession': 207, 'status': 'complete'},
    # {'ID': 6, 'shotsTaken': 24, 'shotsMade': 24, 'shotsMissed': 0, 'highestStreak': 17, 'streak': 2, 'date': 'Wed Oct 25 21:53:57 2023', 'timeOfSession': 210, 'status': 'complete'},
    # {'ID': 7, 'shotsTaken': 88, 'shotsMade': 3, 'shotsMissed': 85, 'highestStreak': 3, 'streak': 1, 'date': 'Fri Oct 20 21:53:57 2023', 'timeOfSession': 108, 'status': 'complete'},
    # {'ID': 8, 'shotsTaken': 84, 'shotsMade': 47, 'shotsMissed': 37, 'highestStreak': 3, 'streak': 2, 'date': 'Wed Oct 11 21:53:57 2023', 'timeOfSession': 115, 'status': 'complete'},
    # {'ID': 9, 'shotsTaken': 44, 'shotsMade': 35, 'shotsMissed': 9, 'highestStreak': 13, 'streak': 1, 'date': 'Sat Oct 07 21:53:57 2023', 'timeOfSession': 250, 'status': 'complete'},
    # {'ID': 10, 'shotsTaken': 26, 'shotsMade': 19, 'shotsMissed': 7, 'highestStreak': 3, 'streak': 1, 'date': 'Fri Sep 29 21:53:57 2023', 'timeOfSession': 196, 'status': 'complete'},
    # {'ID': 11, 'shotsTaken': 18, 'shotsMade': 4, 'shotsMissed': 14, 'highestStreak': 1, 'streak': 1, 'date': 'Wed Sep 20 21:53:57 2023', 'timeOfSession': 123, 'status': 'complete'},
    # {'ID': 12, 'shotsTaken': 28, 'shotsMade': 15, 'shotsMissed': 13, 'highestStreak': 8, 'streak': 4, 'date': 'Wed Sep 13 21:53:57 2023', 'timeOfSession': 196, 'status': 'complete'},
    # {'ID': 13, 'shotsTaken': 64, 'shotsMade': 16, 'shotsMissed': 48, 'highestStreak': 16, 'streak': 13, 'date': 'Tues Sep 05 21:53:57 2023', 'timeOfSession': 184, 'status': 'complete'},
    # {'ID': 14, 'shotsTaken': 93, 'shotsMade': 9, 'shotsMissed': 84, 'highestStreak': 5, 'streak': 3, 'date': 'Wed Aug 30 21:53:57 2023', 'timeOfSession': 182, 'status': 'complete'},
    # {'ID': 15, 'shotsTaken': 71, 'shotsMade': 66, 'shotsMissed': 5, 'highestStreak': 9, 'streak': 4, 'date': 'Sun Aug 27 21:53:57 2023', 'timeOfSession': 58, 'status': 'complete'},
    # {'ID': 16, 'shotsTaken': 42, 'shotsMade': 19, 'shotsMissed': 23, 'highestStreak': 1, 'streak': 0, 'date': 'Wed Aug 16 21:53:57 2023', 'timeOfSession': 126, 'status': 'complete'},
    # {'ID': 17, 'shotsTaken': 46, 'shotsMade': 38, 'shotsMissed': 8, 'highestStreak': 6, 'streak': 0, 'date': 'Mon Aug 07 21:53:57 2023', 'timeOfSession': 134, 'status': 'complete'},
    # {'ID': 18, 'shotsTaken': 16, 'shotsMade': 1, 'shotsMissed': 15, 'highestStreak': 1, 'streak': 0, 'date': 'Wed Aug 02 21:53:57 2023', 'timeOfSession': 83, 'status': 'complete'},
    # {'ID': 19, 'shotsTaken': 68, 'shotsMade': 50, 'shotsMissed': 18, 'highestStreak': 49, 'streak': 40, 'date': 'Mon Jul 24 21:53:57 2023', 'timeOfSession': 126, 'status': 'complete'},
    # {'ID': 20, 'shotsTaken': 63, 'shotsMade': 30, 'shotsMissed': 33, 'highestStreak': 12, 'streak': 11, 'date': 'Wed Jul 19 21:53:57 2023', 'timeOfSession': 240, 'status': 'complete'}]
    # for i in range(len(stats)):
    #     stats_db.insert_one(stats[i])

    # For testing ------------------

    # try:
    #     latestStat = get_last_stat()
    # except: 
    #     print("error with latest stat")
    #     latestStat = {'ID': None}

    # stat = {
    #     "shotsTaken": 2,
    #     "shotsMade":1,
    #     "shotsMissed":2,
    #     "highestStreak": 0,
    #     "streak": 0,
    #     "date": time.ctime(),
    #     "timeOfSession":20,
    #     "status": "active",
    # }

    # stats_db.insert_one(stat)
    # return 'updated'
    
    # ----------------------

    # Uncomment in production

    # latestStat = get_last_stat()
    # latestId = latestStat['ID']

    # Initialize and push
    # start_time = time.time()
    # stat = {
    #     "ID": latestId + 1,
    #     "shotsTaken": 0,
    #     "shotsMade":0,
    #     "shotsMissed":0,
    #     "highestStreak": 0,
    #     "streak": 0,
    #     "date": time.ctime(),
    #     "timeOfSession":0,
    #     "status": "active",
    # }

    # filter = { 'ID': stat['ID'] }
    
    # push to database
    # stats_db.insert_one(stat)

    # Run sensors / use code from other file
    # last_distance_time=-1
    # last_vibration_time=-1
    
    # while not COMPLETE:
    #     if last_distance_time<0 or (time.time()-last_distance_time)>SLEEP:
    #         last_distance_time=-1
    #         if distance_sensor.distance < DISTANCE/2:
    #             last_distance_time=time.time()
    #             stat['shotsMade'] += 1
    #             stat['streak'] += 1
    #             print('Successful shot taken')
    #     if last_vibration_time<0 or (time.time()-last_vibration_time)>SLEEP:
    #         last_vibration_time=-1
    #         if vibration_sensor.motion_detected:
    #             last_vibration_time=time.time()
    #             stat['shotsTaken'] += 1
    #             print('Unsuccessful shot taken')
        
    #     stat['timeOfSession'] = time.time()-start_time
    #     stat['shotsMissed'] = stat['shotsTaken'] - stat['shotsMade']
    #     newvalues = { "$set": { "shotsTaken": stat['shotsTaken'],
    #                             "shotsMade": stat['shotsMade'],
    #                             "shotsMissed": stat['shotsMissed'],
    #                             "streak": stat['streak'],
    #                             "highestStreak": stat['highestStreak'],
    #                             "timeOfSession": stat['timeOfSession']} }
    #     missed = stat['shotsMissed']
    #     if stat['highestStreak'] < stat['streak']:
    #         stat['highestStreak'] = stat['streak']
    #     if missed > lastMiss:
    #         stat['streak'] = 0
    #         lastMiss = missed
            
    #     stats_db.update_one(filter, newvalues)
    #     sleep(0.1)

    # COMPLETE=False
    # GPIO.cleanup()





        

@app.route('/player-stats', methods = ['GET'])
def mongo():
    data = stats_db.find() 
    data_list = []
    for document in data:
          data_list.append(document)
    json_string = json.dumps(data_list, cls=CustomJSONEncoder)
    return json_string

@app.route('/end', methods = ['GET'])
def exit():
    COMPLETE = True

    latestStat = get_last_stat()
    filter = { 'ID': latestStat['ID'] }
    newvalues = { "$set": { "status": "complete" } }

    stats_db.update_one(filter, newvalues)
    return jsonify({"Message":"Terminating, Function"})

# Uncomment in production
# GPIO.cleanup()


if __name__ == '__main__':
    app.run(debug=True)



