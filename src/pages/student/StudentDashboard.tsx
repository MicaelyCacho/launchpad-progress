import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Calendar, BookOpen, FileText, Award, Clock, Users } from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts';

export const StudentDashboard: React.FC = () => {
  // Mock data para demonstração
  const competencyData = [
    { name: 'Argumentação', nota: 85, meta: 90 },
    { name: 'Coesão', nota: 78, meta: 85 },
    { name: 'Gramática', nota: 92, meta: 90 },
    { name: 'Repertório', nota: 80, meta: 88 },
    { name: 'Proposta', nota: 88, meta: 90 }
  ];

  const progressData = [
    { mes: 'Jan', nota: 75 },
    { mes: 'Fev', nota: 78 },
    { mes: 'Mar', nota: 82 },
    { mes: 'Abr', nota: 85 },
    { mes: 'Mai', nota: 88 },
    { mes: 'Jun', nota: 90 }
  ];

  const pendingActivities = [
    { title: 'Redação ENEM - Tema Tecnologia', deadline: '2024-08-15', subject: 'Português' },
    { title: 'Exercícios de Coesão', deadline: '2024-08-12', subject: 'Redação' },
    { title: 'Análise de Texto Argumentativo', deadline: '2024-08-18', subject: 'Literatura' }
  ];

  const myRooms = [
    { name: 'Redação ENEM 2024', teacher: 'Prof. Maria Santos', students: 25, status: 'ativa' },
    { name: 'Literatura Brasileira', teacher: 'Prof. João Silva', students: 30, status: 'ativa' },
    { name: 'Preparatório Vestibular', teacher: 'Prof. Ana Costa', students: 18, status: 'pausa' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-yeseva text-primary">Dashboard do Aluno</h1>
            <p className="text-muted-foreground">Acompanhe seu progresso e atividades</p>
          </div>
          <Badge variant="secondary" className="bg-launch-beige-light text-primary">
            <Award className="h-4 w-4 mr-1" />
            Nota Geral: 85.2
          </Badge>
        </div>

        {/* Cards de Resumo */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="border-launch-beige-light">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Atividades Pendentes</CardTitle>
              <FileText className="h-4 w-4 text-launch-red-dark" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">3</div>
              <p className="text-xs text-muted-foreground">2 com prazo próximo</p>
            </CardContent>
          </Card>

          <Card className="border-launch-beige-light">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Salas Ativas</CardTitle>
              <Users className="h-4 w-4 text-launch-green-gray" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">3</div>
              <p className="text-xs text-muted-foreground">73 colegas no total</p>
            </CardContent>
          </Card>

          <Card className="border-launch-beige-light">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Redações Enviadas</CardTitle>
              <BookOpen className="h-4 w-4 text-launch-beige-yellow" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">12</div>
              <p className="text-xs text-muted-foreground">+2 este mês</p>
            </CardContent>
          </Card>

          <Card className="border-launch-beige-light">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Próximo Evento</CardTitle>
              <Calendar className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">15</div>
              <p className="text-xs text-muted-foreground">Ago - Simulado ENEM</p>
            </CardContent>
          </Card>
        </div>

        {/* Gráficos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Competências */}
          <Card className="border-launch-beige-light">
            <CardHeader>
              <CardTitle className="font-yeseva text-primary">Desempenho por Competência</CardTitle>
              <CardDescription>Suas notas vs metas estabelecidas</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={competencyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="nota" fill="hsl(var(--launch-wine-dark))" />
                  <Bar dataKey="meta" fill="hsl(var(--launch-beige-yellow))" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Evolução Temporal */}
          <Card className="border-launch-beige-light">
            <CardHeader>
              <CardTitle className="font-yeseva text-primary">Evolução das Notas</CardTitle>
              <CardDescription>Progresso ao longo do tempo</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={progressData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="mes" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="nota" 
                    stroke="hsl(var(--launch-red-dark))" 
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Atividades Pendentes e Minhas Salas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Atividades Pendentes */}
          <Card className="border-launch-beige-light">
            <CardHeader>
              <CardTitle className="font-yeseva text-primary flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Atividades Pendentes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {pendingActivities.map((activity, index) => (
                <div key={index} className="border border-launch-beige-light rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-primary">{activity.title}</h4>
                      <p className="text-sm text-muted-foreground">{activity.subject}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {activity.deadline}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Minhas Salas */}
          <Card className="border-launch-beige-light">
            <CardHeader>
              <CardTitle className="font-yeseva text-primary flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Minhas Salas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {myRooms.map((room, index) => (
                <div key={index} className="border border-launch-beige-light rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-primary">{room.name}</h4>
                      <p className="text-sm text-muted-foreground">{room.teacher}</p>
                      <p className="text-xs text-muted-foreground">{room.students} alunos</p>
                    </div>
                    <Badge 
                      variant={room.status === 'ativa' ? 'default' : 'secondary'}
                      className={room.status === 'ativa' ? 'bg-launch-green-gray' : ''}
                    >
                      {room.status === 'ativa' ? 'Ativa' : 'Em Pausa'}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};