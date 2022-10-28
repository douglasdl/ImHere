import { useEffect, useState } from "react";
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    FlatList, 
    Alert 
} from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles"

export function Home() {

    const [participants, setParticipants] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState('');
    const [eventName, setEventName] = useState("Lista de Participantes");
    const [eventDate, setEventDate] = useState('');

    //const participants = ['Douglas', 'Karina', 'Kaori', 'Yuna', 'Tom', 'Jacqueline', 'Milena', 'Mateus']

    function handleParticipantAdd() {
        if(participantName === '') {
            return Alert.alert('Oops...', 'Digite um nome para o participante');
            
        }
        if(participants.includes(participantName)) {
            return Alert.alert('Participante já existe', `Já existe um participante na lista com o nome ${participantName}`);
        }
        setParticipants(prevState => [...prevState, participantName]);
        setParticipantName('');    
    }

    function handleParticipantRemove(name: string) {
        Alert.alert(
            'Remover', 
            `Remover o participante ${name}?`, [
                { 
                    text: 'Sim',
                    onPress: () => {
                        setParticipants(prevState => prevState.filter(participant => participant !== name));
                    }
                },
                {
                    text: 'Não',
                    style: 'cancel'
                }
            ]
        );
        
        
    }

    useEffect(() => {
        let day = new Date().getDay();
        const days = ['Domingo', 'Segunda-feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
        let dayName = days[day];
        let date = new Date().getDate();
        let month = new Date().getMonth() + 1;
        const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        let monthName = monthNames[month];
        var year = new Date().getFullYear();
        setEventDate(`${dayName}, ${date} de ${monthName} de ${year}`);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                { eventName }
            </Text>

            <Text style={styles.eventDate}>
                {/* Sexta-feira, 4 de Novembro de 2022 */}
                { eventDate }
            </Text>

            <View style={styles.form}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Nome do participante"
                    placeholderTextColor="#6b6b6b" 
                    onChangeText={setParticipantName} 
                    value={participantName}
                />

                <TouchableOpacity 
                    style={styles.button}
                    onPress={handleParticipantAdd}
                >
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList 
                keyExtractor={(item) => item}
                data={participants}
                renderItem={({ item }) => (
                    <Participant 
                        key={item}
                        name={item} 
                        onRemove={() => handleParticipantRemove(item)} 
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Nenhum participante adicionado
                    </Text>
                )}
            />
                
            

            
        </View>
    );
}