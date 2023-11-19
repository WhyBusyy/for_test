const participant1 = ["leo", "kiki", "eden"];
const participant2 = ["marina", "josipa", "nikola", "vinko", "filipa"];
const participant3 = ["mislav", "stanko", "mislav", "ana"];

const completion1 = ["eden", "kiki"]
const completion2 = ["josipa", "filipa", "marina", "nikola"]
const completion3 = ["stanko", "ana", "mislav"]

function solution(participant, completion) {
    // 배열을 사전순으로 정렬
    participant.sort();
    completion.sort();

    // 불일치하는 참가자 찾기
    for (let i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) {
            return participant[i];
        }
    }
    return;
}