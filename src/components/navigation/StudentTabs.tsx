import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Calendar, BookOpen, FileText, Award, Clock, Users, Upload, Brain } from 'lucide-react';
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

export const StudentTabs: React.FC = () => {
  const [newEssay, setNewEssay] = useState('');

  // Mock data ajustado para escala de 1000 pontos
  const competencyData = [
    { name: 'Argumentação', nota: 170, meta: 180 },
    { name: 'Coesão', nota: 156, meta: 170 },
    { name: 'Gramática', nota: 184, meta: 180 },
    { name: 'Repertório', nota: 160, meta: 176 },
    { name: 'Proposta', nota: 176, meta: 180 }
  ];

  const progressData = [
    { mes: 'Jan', nota: 750 },
    { mes: 'Fev', nota: 780 },
    { mes: 'Mar', nota: 820 },
    { mes: 'Abr', nota: 850 },
    { mes: 'Mai', nota: 880 },
    { mes: 'Jun', nota: 900 }
  ];

  const essayHistory = [
    { tema: 'Tecnologia na Educação', data: '2024-08-01', nota: 890, competencias: [178, 175, 180, 172, 185] },
    { tema: 'Sustentabilidade Urbana', data: '2024-07-25', nota: 860, competencias: [170, 168, 175, 165, 182] },
    { tema: 'Redes Sociais e Sociedade', data: '2024-07-18', nota: 840, competencias: [165, 162, 170, 160, 183] }
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

  const totalScore = competencyData.reduce((sum, comp) => sum + comp.nota, 0);

  return (
    <div className="container mx-auto p-6">
      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="enviar">Enviar Redação</TabsTrigger>
          <TabsTrigger value="historico">Histórico</TabsTrigger>
          <TabsTrigger value="salas">Sala Virtual</TabsTrigger>
        </TabsList>

        {/* Dashboard */}
        <TabsContent value="dashboard" className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-yeseva text-primary">Dashboard do Aluno</h1>
              <p className="text-muted-foreground">Acompanhe seu progresso e atividades</p>
            </div>
            <Badge variant="secondary" className="bg-launch-beige-light text-primary">
              <Award className="h-4 w-4 mr-1" />
              Nota Geral: {totalScore}
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
                <CardDescription>Suas notas vs metas estabelecidas (máx. 200 pontos cada)</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={competencyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 200]} />
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
                <CardDescription>Progresso ao longo do tempo (máx. 1000 pontos)</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={progressData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="mes" />
                    <YAxis domain={[0, 1000]} />
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
        </TabsContent>

        {/* Enviar Redação */}
        <TabsContent value="enviar" className="space-y-6">
          <Card className="border-launch-beige-light">
            <CardHeader>
              <CardTitle className="font-yeseva text-primary">Enviar Nova Redação</CardTitle>
              <CardDescription>Escreva sua redação seguindo o tema proposto</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium text-primary mb-2">Tema: "Tecnologia e Educação no Século XXI"</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Com base na situação-problema apresentada e nos conhecimentos construídos ao longo de sua formação, 
                  redija um texto dissertativo-argumentativo em modalidade escrita formal da língua portuguesa sobre o tema...
                </p>
              </div>
              <Textarea
                placeholder="Digite sua redação aqui..."
                value={newEssay}
                onChange={(e) => setNewEssay(e.target.value)}
                className="min-h-[400px] border-launch-beige-light"
              />
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Brain className="h-4 w-4" />
                  <span>As correções são realizadas com apoio de inteligência artificial, respeitando os critérios oficiais de avaliação de redações.</span>
                </div>
                <Button className="bg-primary hover:bg-accent">
                  <Upload className="h-4 w-4 mr-2" />
                  Enviar Redação
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Histórico */}
        <TabsContent value="historico" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-yeseva text-primary">Histórico de Redações</h2>
            <div className="text-sm text-muted-foreground flex items-center">
              <Brain className="h-4 w-4 mr-1" />
              Correções com apoio de IA
            </div>
          </div>
          
          <div className="space-y-4">
            {essayHistory.map((essay, index) => (
              <Card key={index} className="border-launch-beige-light">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-primary">{essay.tema}</h3>
                      <p className="text-sm text-muted-foreground">Enviado em {essay.data}</p>
                    </div>
                    <Badge variant="secondary" className="bg-launch-beige-light text-primary">
                      Nota: {essay.nota}/1000
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-5 gap-4">
                    {essay.competencias.map((nota, compIndex) => {
                      const competencias = ['Argumentação', 'Coesão', 'Gramática', 'Repertório', 'Proposta'];
                      return (
                        <div key={compIndex} className="text-center">
                          <p className="text-xs text-muted-foreground">{competencias[compIndex]}</p>
                          <div className="text-lg font-bold text-primary">{nota}</div>
                          <Progress value={(nota / 200) * 100} className="h-2 mt-1" />
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Salas */}
        <TabsContent value="salas" className="space-y-6">
          <h2 className="text-2xl font-yeseva text-primary">Minhas Salas Virtuais</h2>
          
          <div className="space-y-4">
            {myRooms.map((room, index) => (
              <Card key={index} className="border-launch-beige-light">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary">{room.name}</h3>
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
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};