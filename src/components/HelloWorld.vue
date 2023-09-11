<template>
  <v-app theme="light">
    <v-app-bar flat class="border-b">
      <!-- <v-app-bar density="compact" prominent> -->
      <template v-slot:prepend>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>
        <v-icon icon="mdi-view-grid" size="large" start />
        Central Soft</v-app-bar-title>

      <template v-slot:append>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon class="mr-2">
          <v-badge dot color="info">
            <v-icon icon="mdi-bell-outline"></v-icon>
          </v-badge>
        </v-btn>

        <v-menu>
          <template #activator="{ props }">
            <v-avatar v-bind="props">
              <v-img cover
                src="https://images.pexels.com/photos/6217815/pexels-photo-6217815.jpeg?auto=compress&cs=tinysrgb&w=600"></v-img>
            </v-avatar>
          </template>

          <v-card min-width="200px">
            <v-list :lines="false" density="compact" nav="">
              <v-list-item to="/UserProfile" prepend-icon="mdi-account-outline">Perfil</v-list-item>
            </v-list>
            <v-list :lines="false" density="compact" nav="">
              <v-list-item prepend-icon="mdi-heart-outline">Favoritos</v-list-item>
            </v-list>
          </v-card>
        </v-menu>

        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>

    </v-app-bar>

    <v-navigation-drawer v-model="drawer" location="left" temporary transition="fade-transition">
      <v-list><v-list-subheader>Menu</v-list-subheader>
        <v-list-item prepend-icon="mdi-home">Inicio</v-list-item>
        <!-- <v-list :items="items"></v-list> -->

        <v-list-item prepend-icon="mdi-account">Accounts</v-list-item>
        <v-list-item prepend-icon="mdi-account-group">Groups</v-list-item>

        <v-list-group value="Users">
          <template #activator="{ props }">
            <v-list-item v-bind="props" prepend-icon="mdi-account" title="Clients"></v-list-item>
          </template>
          <v-list-item prepend-icon="mdi-chart-bar">Report</v-list-item>
          <v-list-item prepend-icon="mdi-currency-usd">Cashflow</v-list-item>
          <!-- </v-list-group> v-for="n in items" :key="n" v-slot="{}"> -->

        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <!-- 
    <v-slide-group-item v-for="n in items" :key="n" v-slot="{ isSelected, toggle }">
        <v-list :items="items">
          <v-icon>{{ items.title }}</v-icon>
        </v-list>
      </v-slide-group-item> -->

    <v-main style="background-color: white;">
      <!-- <v-container style="background-color: white;"> -->
      <!-- <v-container> -->
      <h1 class="text-h6 text-md-h5 font-weight-bold mb-6">Dashboard</h1>

      <v-row cols="12" sm="6" md="4" lg="3">
        <!-- <v-col v-for="(item,i) in items" :key="i">
            <v-hover v-slot="{ isHovering, props }"> -->

        <v-sheet class="mx-auto" max-width="100%">
          <v-slide-group show-arrows >
            <v-slide-group-item v-for="n in tabMenus" :key="n" v-slot="{ isSelected, toggle }">
              <!-- <v-btn
          class="ma-2"
          rounded
          :color="isSelected ? 'primary' : undefined"
          @click="toggle"
        >
          Options {{ n }}
        </v-btn> -->
              <v-card width="250" height="120" class="overflow-hidden pa-l ma-2 rounded-md" elevation="3" style="background-color: #263238;" theme="dark">

                <v-btn variant="text" class="float-sm-right" @click.stop="openDialog(n); mdContacts = !mdContacts;">
                  <!-- <v-icon color="orange-darken" end>
                      mdi-plus-circle
                    </v-icon> -->
                  <v-icon color="orange-darken-4" end>
                    mdi-open-in-new
                  </v-icon>
                </v-btn>

                <v-card-title class="text-h5">
                  <v-icon>{{ n.icon }}</v-icon>&nbsp;{{ n.title }}
                  <v-label>{{ n.text }}</v-label>
                </v-card-title>

                <v-card-subtitle style="">{{ n.descr }}</v-card-subtitle>

                <v-card-actions class="d-flex justify-end">
                  <!-- <v-btn variant="plain" @click.stop="triggerDialog(n.dialog)">
                    Expandir -->
                  <!-- <v-icon
                color="orange-darken-4"
                end
              >
                mdi-open-in-new
              </v-icon> -->
                  <!-- </v-btn> -->

                  <v-btn variant="text" @click.stop="openDialog(n); mdContacts = !mdContacts;"
                    v-bind="props">Adicionar</v-btn>

                  <v-btn variant="plain" class="float-sm-left">
                    Detalhes
                    <!-- <v-icon
                color="orange-darken-4"
                end
              >
              mdi-eye
              </v-icon> -->
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>

      </v-row>

      <v-row cols="12" sm="7" md="12" lg="7" class="overflow-hidden pa-l ma-2 rounded-md">
        <v-col>
          <div class="d-flex justify-space-around">
    <div class="pa-4 text-center bg-secondary rounded-0">
      .rounded-0
    </div>
  </div>
  </v-col>
        <v-col>
          <div class="d-flex justify-space-around">
    <div class="pa-4 text-center bg-secondary rounded-0">
      .rounded-0
    </div>
  </div>
        </v-col>
        <v-col>
          <div class="d-flex justify-space-around">
    <div class="pa-4 text-center bg-secondary rounded-0">
      .rounded-0
    </div>
  </div>
        </v-col>
      </v-row>
      <br>

      <v-divider></v-divider>
      <br>

      <!--         
        <div style="height:300px;">
          <v-img cover src="https://media.istockphoto.com/id/1311598658/photo/businessman-trading-online-stock-market-on-teblet-screen-digital-investment-concept.jpg?b=1&s=612x612&w=0&k=20&c=bpQMsH07ziELXla0SZJt84-w0JkxsVXs05c7T2Iygks="></v-img>
        </div> -->

      <div class="d-flex justify-space-between">
        <v-card-title>
          <h1 class="text-h6 text-md-h5 font-weight-bold mb-6">Recentes</h1>
        </v-card-title>
        <v-btn @click="isDialogOpen = true" v-bind="props" icon="mdi-plus-thick"></v-btn>

        <!-- DIALOG -->
        <v-dialog width='850' v-model="mdContacts">
          <template #activator="{ props }">
          </template>

          <v-card>
            <v-toolbar color="primary">

              <v-toolbar-title bg-color="deep-purple-darken-4"><v-icon>{{ this.modName.icon }}</v-icon>&nbsp;{{
                this.modName.text }}</v-toolbar-title>

              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
              <!-- 
                <template v-slot:extension>
                  <v-tabs v-model="tabs" align-tabs="title">
                    <v-tab v-for="item in itemr" :key="item" :value="item.text">
                      <v-icon>{{ item.icon }}</v-icon>{{ item.title }}
                    </v-tab>
                  </v-tabs>
                </template> -->
            </v-toolbar>

            <v-card-text v-if="this.modName.dialog == 'Contacts'">
              
              <v-tabs v-model="tabs" align-tabs="centered">
                <v-tab prepend-icon="mdi-information-outline">Detalhes</v-tab>
                <v-tab prepend-icon="mdi-account-cog">Opções</v-tab>
                <v-tab prepend-icon="mdi-account-multiple">Sailpoints</v-tab>
                <v-tab prepend-icon="mdi-history">Histórico</v-tab>
              </v-tabs>

              <v-window v-model="tabs">
                <v-window-item v-model="details">
              <!-- <v-card> -->
              <!-- <v-card-title>
          <span class="text-h5">User Profile</span>
        </v-card-title> -->
              <v-card-text>
                <!-- <v-container> -->
                <v-row>
                  <v-col cols="12" sm="6" md="4" class="pa-0">
                    <v-text-field label="Primeiro nome*" prepend-inner-icon="mdi-account" required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4" class="pa-0">
                    <v-text-field label="Nome do meio" hint="example of helper text only on focus"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4" class="pa-0">
                    <v-text-field label="Último nome*" hint="example of persistent helper text" persistent-hint
                      required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6" class="pa-0">
                    <v-text-field label="Telefone*" type="telephone" prepend-inner-icon="mdi-phone" required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="5" md="6" class="pa-0 ml-0">
                    <v-text-field label="SMS*" prepend-inner-icon="mdi-message-text" required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6" class="pa-0">
                    <v-text-field label="E-mail*" prepend-inner-icon="mdi-email-fast-outline" required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6" class="pa-0">
                    <v-text-field label="WhatsApp*" prepend-inner-icon="mdi-whatsapp" required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6" class="pa-0">
                    <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Idade*" prepend-inner-icon="mdi-numeric-7" required></v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="6" class="pa-0">
                    <v-autocomplete
                      :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                      label="Interesses" prepend-inner-icon="mdi-set-center" multiple></v-autocomplete>
                  </v-col>
                  <v-col cols="12" sm="6" md="6" class="pa-0">
                    <v-autocomplete :items="['Marketing', 'Autenticação', 'Cobrança']" label="Campanha" prepend-inner-icon="mdi-forum"
                      multiple></v-autocomplete>
                  </v-col>
                  <v-col cols="12" sm="6" md="6" class="pa-0">
                    <v-autocomplete :items="['Admin', 'Gerente', 'Convidado']" label="Cargo" prepend-inner-icon="mdi-account-key" multiple></v-autocomplete>
                  </v-col>
                  <v-col cols="12" sm="6" md="6" class="pa-0">
                    <v-autocomplete :items="['Cliente', 'Empresa', 'Interno']" label="Grupo" prepend-inner-icon="mdi-account-multiple" multiple></v-autocomplete>
                  </v-col>
                        <v-col cols="12" sm="6" md="6" class="pa-0">
                          <v-autocomplete :items="['Marketing', 'Autentificação', 'Cobrança']" label="Flex" prepend-inner-icon="mdi-shuffle"
                            multiple></v-autocomplete>
                        </v-col>
                </v-row>
                <!-- </v-container> -->
                <small>*indicates required field</small>
              </v-card-text>
              <!-- <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions> -->
              <!-- </v-card> -->
                </v-window-item>
              </v-window>
            </v-card-text>

            <v-card-text v-if="this.modName.dialog == 'Groups'">

              <v-tabs v-model="tabs" align-tabs="centered">
                <v-tab prepend-icon="mdi-information-outline">Detalhes</v-tab>
                <v-tab prepend-icon="mdi-account-cog">Opções</v-tab>
                <v-tab prepend-icon="mdi-account-multiple">Membros</v-tab>
              </v-tabs>

              <v-window v-model="tabs">
                <v-window-item v-model="details">
                  <v-card>
                    <v-card-text>

                      <v-row>
                        <v-col cols="12" sm="12" md="12" class="pa-0">
                          <v-text-field label="Nome do Grupo*" prepend-inner-icon="mdi-account-multiple" required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="12" class="pa-0">
                          <v-text-field label="Descrição" prepend-inner-icon="mdi-information-variant"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6" class="pa-0">
                          <v-autocomplete :items="['Admin', 'Gerente', 'Convidado']" label="Departamento" prepend-inner-icon="mdi-domain"
                            multiple></v-autocomplete>
                        </v-col>
                        <v-col cols="12" sm="6" md="6" class="pa-0">
                          <v-autocomplete :items="['Interno', 'Externo', 'Admin']" label="Tipo de Conta" prepend-inner-icon="mdi-account-badge-outline"
                            multiple></v-autocomplete>
                        </v-col>
                        <v-col cols="12" sm="6" md="6" class="pa-0">
                          <v-autocomplete :items="['Convidado', 'Administrador']" label="Domínio" prepend-inner-icon="mdi-security"
                            multiple></v-autocomplete>
                        </v-col>
                        <v-col cols="12" sm="6" md="6" class="pa-0">
                          <v-autocomplete :items="['English', 'Português', 'François']" label="Linguagem" prepend-inner-icon="mdi-translate"
                            multiple></v-autocomplete>
                        </v-col>
                        <v-col cols="12" sm="6" md="6" class="pa-0">
                          <v-autocomplete :items="['Painel', 'Windows']" label="Modo de Abertura" prepend-inner-icon="mdi-open-in-new"
                            multiple></v-autocomplete>
                        </v-col>
                        <v-col cols="12" sm="6" md="6" class="pa-0">
                          <v-autocomplete :items="['Marketing', 'Autentificação', 'Cobrança']" label="Campanha" prepend-inner-icon="mdi-message-star-outline"
                            multiple></v-autocomplete>
                        </v-col>
                        <v-col cols="12" sm="6" md="6" class="pa-0">
                          <v-autocomplete :items="['Administração',
                            'Gestão de Inventário',
                            'Posto de Vendas',
                            'Centro de Custos',
                            'Gestão Hospitalar',
                            'Contabilidade',
                            'Finanças',
                            'Recursos Humanos',
                            'Utilidades',
                            'Outros Módulos',
                            'Directório',
                            'Centro de Mensagens',
                            'Centro de Relatórios',
                            'Documentos',
                            'Gestão de Cyber',
                            'Gestão Acádemica',
                            'Gestão Hoteleira',
                            'Gestão de Ginásio',
                            'Gestão de Rent-a-Car',
                            'Gestão de Creche',
                            'Acádemia de Música',
                            'Centro de Vistos',
                            'Estação de Serviço',
                            'Gestão de Lavandaria',
                            'Tesouraria',
                            'Secretária',
                            'Escola Sabatina']" label="Módulo Padrão" prepend-inner-icon="mdi-view-grid" multiple></v-autocomplete>
                        </v-col>
                        <v-col cols="12" sm="6" md="6" class="pa-0">
                          <v-autocomplete :items="['Marketing', 'Autentificação', 'Cobrança']" label="Flex" prepend-inner-icon="mdi-shuffle"
                            multiple></v-autocomplete>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-window-item>
                <v-window-item v-model="options">
                  <v-card>
                    <v-card-text>


                      <v-divider></v-divider>

                      <v-list lines="three" select-strategy="classic">
                        <v-list-subheader>General</v-list-subheader>

                        <v-list-item value="notifications">
                          <template v-slot:prepend="{ isActive }">

                            <v-list-item-action start>
                              <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
                            </v-list-item-action>
                          </template>

                          <v-list-item-title>Notificações</v-list-item-title>

                          <v-list-item-subtitle>
                            Notify me about updates to apps or games that I downloaded
                          </v-list-item-subtitle>
                        </v-list-item>

                        <v-list-item value="sound">
                          <template v-slot:prepend="{ isActive }">
                            <v-list-item-action start>
                              <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
                            </v-list-item-action>
                          </template>

                          <v-list-item-title>Flex</v-list-item-title>

                          <v-list-item-subtitle>
                            Auto-update apps at any time. Data charges may apply
                          </v-list-item-subtitle>
                        </v-list-item>

                        <v-list-item value="widgets">
                          <template v-slot:prepend="{ isActive }">
                            <v-list-item-action start>
                              <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
                            </v-list-item-action>
                          </template>

                          <v-list-item-title>Auto-add widgets</v-list-item-title>

                          <v-list-item-subtitle>
                            Automatically add home screen widgets when downloads complete
                          </v-list-item-subtitle>
                        </v-list-item>
                      </v-list>

                    </v-card-text>
                  </v-card>
                </v-window-item>
                <v-window-item v-model="members">
                  <v-card>
                    <v-card-text>


                      <v-divider></v-divider>

                      <v-list lines="three" select-strategy="classic">
                        <v-list-subheader>General</v-list-subheader>

                        <v-list-item value="notifications">
                          <template v-slot:prepend="{ isActive }">

                            <v-list-item-action start>
                              <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
                            </v-list-item-action>
                          </template>

                          <v-list-item-title>Notificações</v-list-item-title>

                          <v-list-item-subtitle>
                            Notify me about updates to apps or games that I downloaded
                          </v-list-item-subtitle>
                        </v-list-item>

                        <v-list-item value="sound">
                          <template v-slot:prepend="{ isActive }">
                            <v-list-item-action start>
                              <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
                            </v-list-item-action>
                          </template>

                          <v-list-item-title>Flex</v-list-item-title>

                          <v-list-item-subtitle>
                            Auto-update apps at any time. Data charges may apply
                          </v-list-item-subtitle>
                        </v-list-item>

                        <v-list-item value="widgets">
                          <template v-slot:prepend="{ isActive }">
                            <v-list-item-action start>
                              <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
                            </v-list-item-action>
                          </template>

                          <v-list-item-title>Auto-add widgets</v-list-item-title>

                          <v-list-item-subtitle>
                            Automatically add home screen widgets when downloads complete
                          </v-list-item-subtitle>
                        </v-list-item>
                      </v-list>

                    </v-card-text>
                  </v-card>
                </v-window-item>
              </v-window>
            </v-card-text>

            <v-card-text v-if="this.modName.dialog == 'Campaigns'">

              <v-tabs v-model="tabs" align-tabs="centered">
                <v-tab>Detalhes</v-tab>
                <v-tab>Opções</v-tab>
              </v-tabs>

              <v-window v-model="tabs">
                <v-window-item v-model="details">
                  <v-card>
                    <!-- <v-card-title>
          <span class="text-h5">User Profile</span>
        </v-card-title> -->
                    <v-card-text>
                      <!-- <v-container> -->
                      <v-row>
                        <v-col cols="12" sm="12" md="12" class="pa-0">
                          <v-text-field label="Título da Campanha" hint="example of helper text only on focus" prepend-inner-icon="mdi-format-title"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" class="pa-0">
                          <v-autocomplete
                            :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                            label="Grupo"  prepend-inner-icon="mdi-account-multiple"  multiple></v-autocomplete>
                        </v-col>
                        <v-col cols="12" sm="6" class="pa-0">
                          <v-autocomplete
                            :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                            label="Contactos"  prepend-inner-icon="mdi-account"  multiple></v-autocomplete>
                        </v-col>
                        <v-col cols="12" sm="6" md="6" class="pa-0">
                          <v-text-field label="Data*"  prepend-inner-icon="mdi-calendar"  required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6" class="pa-0">
                          <v-text-field label="Hora" prepend-inner-icon="mdi-clock-outline"  hint="example of helper text only on focus"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" class="pa-0">
                          <v-autocomplete
                            :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                            label="SMS"  prepend-inner-icon="mdi-message-settings-outline"  multiple></v-autocomplete>
                        </v-col>
                        <v-col cols="12" sm="12" class="pa-0">
                          <v-autocomplete
                            :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                            label="E-mail"  prepend-inner-icon="mdi-email-outline"  multiple></v-autocomplete>
                        </v-col>
                        <v-col cols="12" sm="12" class="pa-0">
                          <v-autocomplete
                            :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                            label="Telefone"  prepend-inner-icon="mdi-phone"  multiple></v-autocomplete>
                        </v-col>
                      </v-row>
                      <!-- </v-container> -->
                      <small>*indicates required field</small>
                    </v-card-text>
                    <!-- <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions> -->
                  </v-card>
                </v-window-item>
                <v-window-item v-model="options">
                  <v-card>
                    <v-card-text>

                      <v-divider></v-divider>

                      <v-list lines="three" select-strategy="classic">
                        <v-list-subheader>General</v-list-subheader>

                        <v-list-item value="notifications">
                          <template v-slot:prepend="{ isActive }">

                            <v-list-item-action start>
                              <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
                            </v-list-item-action>
                          </template>

                          <v-list-item-title>Notificações</v-list-item-title>

                          <v-list-item-subtitle>
                            Notify me about updates to apps or games that I downloaded
                          </v-list-item-subtitle>
                        </v-list-item>

                        <v-list-item value="sound">
                          <template v-slot:prepend="{ isActive }">
                            <v-list-item-action start>
                              <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
                            </v-list-item-action>
                          </template>

                          <v-list-item-title>Flex</v-list-item-title>

                          <v-list-item-subtitle>
                            Auto-update apps at any time. Data charges may apply
                          </v-list-item-subtitle>
                        </v-list-item>

                        <v-list-item value="widgets">
                          <template v-slot:prepend="{ isActive }">
                            <v-list-item-action start>
                              <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
                            </v-list-item-action>
                          </template>

                          <v-list-item-title>Auto-add widgets</v-list-item-title>

                          <v-list-item-subtitle>
                            Automatically add home screen widgets when downloads complete
                          </v-list-item-subtitle>
                        </v-list-item>
                      </v-list>

                    </v-card-text>
                  </v-card>
                </v-window-item>
              </v-window>
            </v-card-text>

            <v-card-text
              v-if="this.modName.dialog == 'Messages' | this.modName.dialog == 'Chamadas' | this.modName.dialog == 'WhatsApp' | this.modName.dialog == 'E-mail'">

              <v-tabs v-model="tabs" align-tabs="centered">
                <v-tab>Detalhes</v-tab>
                <v-tab>Opções</v-tab>
              </v-tabs>

              <v-window v-model="tabs">
                <v-window-item v-model="details">
                  <v-card>
                    <!-- <v-card-title>
          <span class="text-h5">User Profile</span>
        </v-card-title> -->
                    <v-card-text>
                      <!-- <v-container> -->
                      <v-row>
                        <v-col cols="12" sm="12" class="pa-0">
                          <v-autocomplete :items="['SMS', 'Telefone', 'WhatsApp', 'E-mail']" label="Categoria" prepend-inner-icon="mdi-cube-send"
                            multiple></v-autocomplete>
                        </v-col>
                        <v-col cols="12" sm="12" md="12" class="pa-0">
                          <v-text-field label="Título" hint="example of helper text only on focus" prepend-inner-icon="mdi-format-title"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="12" class="pa-0">
                          <v-textarea label="Mensagem*" prepend-inner-icon="mdi-message-text-outline" required></v-textarea>
                        </v-col>
                      </v-row>
                      <!-- </v-container> -->
                      <small>*indicates required field</small>
                    </v-card-text>
                    <!-- <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions> -->
                  </v-card>
                </v-window-item>
                <v-window-item v-model="options">
                  <v-card>
                    <v-card-text>

                      <v-divider></v-divider>

                      <v-list lines="three" select-strategy="classic">
                        <v-list-subheader>General</v-list-subheader>

                        <v-list-item value="notifications">
                          <template v-slot:prepend="{ isActive }">

                            <v-list-item-action start>
                              <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
                            </v-list-item-action>
                          </template>

                          <v-list-item-title>Notificações</v-list-item-title>

                          <v-list-item-subtitle>
                            Notify me about updates to apps or games that I downloaded
                          </v-list-item-subtitle>
                        </v-list-item>

                        <v-list-item value="sound">
                          <template v-slot:prepend="{ isActive }">
                            <v-list-item-action start>
                              <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
                            </v-list-item-action>
                          </template>

                          <v-list-item-title>Flex</v-list-item-title>

                          <v-list-item-subtitle>
                            Auto-update apps at any time. Data charges may apply
                          </v-list-item-subtitle>
                        </v-list-item>

                        <v-list-item value="widgets">
                          <template v-slot:prepend="{ isActive }">
                            <v-list-item-action start>
                              <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
                            </v-list-item-action>
                          </template>

                          <v-list-item-title>Auto-add widgets</v-list-item-title>

                          <v-list-item-subtitle>
                            Automatically add home screen widgets when downloads complete
                          </v-list-item-subtitle>
                        </v-list-item>
                      </v-list>

                    </v-card-text>
                  </v-card>
                </v-window-item>
              </v-window>
            </v-card-text>

            <v-card-text v-if="this.modName.dialog == 'Histórico'">

              <v-tabs v-model="tabs" align-tabs="centered">
                <v-tab>Detalhes</v-tab>
                <v-tab>Opções</v-tab>
              </v-tabs>

              <v-window v-model="tabs">
                <v-window-item v-model="details">
                  <v-card>
                    <!-- <v-card-title>
<span class="text-h5">User Profile</span>
</v-card-title> -->
                    <v-card-text>
                      <!-- <v-container> -->
                      <v-row>
                        <v-col cols="12" sm="6">
                          <v-autocomplete
                            :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                            label="Grupo" multiple></v-autocomplete>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-autocomplete
                            :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                            label="Contactos" multiple></v-autocomplete>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field label="Data*" required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field label="Hora" hint="example of helper text only on focus"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12">
                          <v-autocomplete
                            :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                            label="SMS" multiple></v-autocomplete>
                        </v-col>
                        <v-col cols="12" sm="12">
                          <v-autocomplete
                            :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                            label="E-mail" multiple></v-autocomplete>
                        </v-col>
                        <v-col cols="12" sm="12">
                          <v-autocomplete
                            :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                            label="Telefone" multiple></v-autocomplete>
                        </v-col>
                      </v-row>
                      <!-- </v-container> -->
                      <small>*indicates required field</small>
                    </v-card-text>
                    <!-- <v-card-actions>
<v-spacer></v-spacer>
<v-btn
color="blue-darken-1"
variant="text"
@click="dialog = false"
>
Close
</v-btn>
<v-btn
color="blue-darken-1"
variant="text"
@click="dialog = false"
>
Save
</v-btn>
</v-card-actions> -->
                  </v-card>
                </v-window-item>
                <v-window-item v-model="options">
                  <v-card>
                    <v-card-text>

                      <v-divider></v-divider>

                      <v-list lines="three" select-strategy="classic">
                        <v-list-subheader>General</v-list-subheader>

                        <v-list-item value="notifications">
                          <template v-slot:prepend="{ isActive }">

                            <v-list-item-action start>
                              <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
                            </v-list-item-action>
                          </template>

                          <v-list-item-title>Notificações</v-list-item-title>

                          <v-list-item-subtitle>
                            Notify me about updates to apps or games that I downloaded
                          </v-list-item-subtitle>
                        </v-list-item>

                        <v-list-item value="sound">
                          <template v-slot:prepend="{ isActive }">
                            <v-list-item-action start>
                              <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
                            </v-list-item-action>
                          </template>

                          <v-list-item-title>Flex</v-list-item-title>

                          <v-list-item-subtitle>
                            Auto-update apps at any time. Data charges may apply
                          </v-list-item-subtitle>
                        </v-list-item>

                        <v-list-item value="widgets">
                          <template v-slot:prepend="{ isActive }">
                            <v-list-item-action start>
                              <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
                            </v-list-item-action>
                          </template>

                          <v-list-item-title>Auto-add widgets</v-list-item-title>

                          <v-list-item-subtitle>
                            Automatically add home screen widgets when downloads complete
                          </v-list-item-subtitle>
                        </v-list-item>
                      </v-list>

                    </v-card-text>
                  </v-card>
                </v-window-item>
              </v-window>
            </v-card-text>


            <v-card-text v-if="this.modName.dialog == 'Settings'">

              <v-tabs v-model="tabs" align-tabs="centered">
                <v-tab>Detalhes</v-tab>
                <v-tab>Opções</v-tab>
              </v-tabs>

              <v-window v-model="tabs">
                <v-window-item v-model="details">
                 
                </v-window-item>
                <v-window-item v-model="options">
                  <v-card>
                    <v-card-text>

                      <v-divider></v-divider>

                      <v-list lines="three" select-strategy="classic">
                        <v-list-subheader>General</v-list-subheader>

                        <v-list-item value="notifications">
                          <template v-slot:prepend="{ isActive }">

                            <v-list-item-action start>
                              <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
                            </v-list-item-action>
                          </template>

                          <v-list-item-title>Notificações</v-list-item-title>

                          <v-list-item-subtitle>
                            Notify me about updates to apps or games that I downloaded
                          </v-list-item-subtitle>
                        </v-list-item>

                        <v-list-item value="sound">
                          <template v-slot:prepend="{ isActive }">
                            <v-list-item-action start>
                              <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
                            </v-list-item-action>
                          </template>

                          <v-list-item-title>Flex</v-list-item-title>

                          <v-list-item-subtitle>
                            Auto-update apps at any time. Data charges may apply
                          </v-list-item-subtitle>
                        </v-list-item>

                        <v-list-item value="widgets">
                          <template v-slot:prepend="{ isActive }">
                            <v-list-item-action start>
                              <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
                            </v-list-item-action>
                          </template>

                          <v-list-item-title>Auto-add widgets</v-list-item-title>

                          <v-list-item-subtitle>
                            Automatically add home screen widgets when downloads complete
                          </v-list-item-subtitle>
                        </v-list-item>
                      </v-list>

                    </v-card-text>
                  </v-card>
                </v-window-item>
              </v-window>
            </v-card-text>
            <v-card-actions class="align-content-end">
              <v-spacer></v-spacer>
              <v-btn variant="text" @click="mdContacts = false" prepend-icon="mdi-close-circle">Cancelar</v-btn>
              <v-btn color="success" :ripple="true" prepend-icon="mdi-content-save-outline">Guardar</v-btn>
            </v-card-actions>

            <v-window v-model="tab">
              <v-window-item v-for="item in items" :key="item" :value="item">
                {{ text }}
              </v-window-item>
            </v-window>

          </v-card>
        </v-dialog>

        <!-- DIALOG -->
        <v-dialog width="800px" v-model="mdGroups" :propertyname="mdGroups">
          <template #activator="{ props }">
          </template>

          <v-card>
            <v-toolbar color="primary">

              <v-toolbar-title bg-color="deep-purple-darken-4"><v-icon
                  icon="mdi-message"></v-icon>&nbsp;Grupos</v-toolbar-title>

              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
              <!-- 
                <template v-slot:extension>
                  <v-tabs v-model="tabs" align-tabs="title">
                    <v-tab v-for="item in itemr" :key="item" :value="item.text">
                      <v-icon>{{ item.icon }}</v-icon>{{ item.title }}
                    </v-tab>
                  </v-tabs>
                </template> -->
            </v-toolbar>


            <v-card-text>
              <v-row>
                <v-col>
                  <v-text-field label="Nome completo" variant="outlined"></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field label="E-mail" variant="outlined" :rules="emailRules"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field label="SMS" variant="outlined"></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field label="WhatsApp" variant="outlined" :rules="emailRules"></v-text-field>
                </v-col>
              </v-row>
              <v-select label="Cargo" variant="outlined" :items="['Admin', 'Gerente', 'Convidado']"></v-select>

              <v-select label="Grupo" variant="outlined" :items="['Cliente', 'Empresa', 'Interno']"></v-select>

              <v-select label="Campanha" variant="outlined"
                :items="['Marketing', 'Autentificação', 'Cobrança']"></v-select>
            </v-card-text>

            <v-card-actions class="align-content-end">
              <v-spacer></v-spacer>
              <v-btn variant="text" @click="isDialogOpenMsg = false">Cancelar</v-btn>
              <v-btn color="success" :ripple="true">Guardar</v-btn>
            </v-card-actions>

            <v-window v-model="tab">
              <v-window-item v-for="item in items" :key="item" :value="item">
                {{ text }}
              </v-window-item>
            </v-window>

          </v-card>
        </v-dialog>

        <!-- DIALOG -->
        <v-dialog width="800px" v-model="isDialogOpenPhn">
          <template #activator="{ props }">
          </template>

          <v-card>
            <v-toolbar color="primary">

              <v-toolbar-title bg-color="deep-purple-darken-4"><v-icon
                  icon="mdi-message"></v-icon>&nbsp;Chamadas</v-toolbar-title>

              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
              <!-- 
                <template v-slot:extension>
                  <v-tabs v-model="tabs" align-tabs="title">
                    <v-tab v-for="item in itemr" :key="item" :value="item.text">
                      <v-icon>{{ item.icon }}</v-icon>{{ item.title }}
                    </v-tab>
                  </v-tabs>
                </template> -->
            </v-toolbar>


            <v-card-text>
              <v-row>
                <v-col>
                  <v-text-field label="Nome completo" variant="outlined"></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field label="E-mail" variant="outlined" :rules="emailRules"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field label="SMS" variant="outlined"></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field label="WhatsApp" variant="outlined" :rules="emailRules"></v-text-field>
                </v-col>
              </v-row>
              <v-select label="Cargo" variant="outlined" :items="['Admin', 'Gerente', 'Convidado']"></v-select>

              <v-select label="Grupo" variant="outlined" :items="['Cliente', 'Empresa', 'Interno']"></v-select>

              <v-select label="Campanha" variant="outlined"
                :items="['Marketing', 'Autentificação', 'Cobrança']"></v-select>
            </v-card-text>

            <v-card-actions class="align-content-end">
              <v-spacer></v-spacer>
              <v-btn variant="text" @click="isDialogOpenPhn = false">Cancelar</v-btn>
              <v-btn color="success" :ripple="true">Guardar</v-btn>
            </v-card-actions>

            <v-window v-model="tab">
              <v-window-item v-for="item in items" :key="item" :value="item">
                {{ text }}
              </v-window-item>
            </v-window>

          </v-card>
        </v-dialog>
        <!-- <v-dialog
      v-model="isDialogOpenMsg"
      width="1024"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Legal first name*"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Legal middle name"
                  hint="example of helper text only on focus"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog> -->

      </div>


      <v-table style="text-align: left;" density="compact" :elevation="isHovering ? 24 : 14" class="mx-auto pa-1">
        <thead>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Phone</th>
          <th>Categoria</th>
          <th>Ações</th>
        </thead>
        <tbody>
          <tr>
            <td>Vasco Gungui</td>
            <td>cubenda@gmail.com</td>
            <td>0000-0000-0000</td>
            <td>Administrador</td>
            <td><v-btn color="primary" density="compact">Editar</v-btn></td>
          </tr>
          <tr>
            <td>Dina Gungui</td>
            <td>cubenda@gmail.com</td>
            <td>0000-0000-0000</td>
            <td><v-chip>Convidado</v-chip></td>
            <td><v-btn icon="mdi-pencil" color="primary"></v-btn></td>
          </tr>
        </tbody>
      </v-table>
      <!-- </v-container> -->


      <v-container class="fill-height">
        <v-responsive class="align-center text-center fill-height">


          <!-- <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>  -->

          <div class="py-14" />

          <v-row class="d-flex align-center justify-center">
            <v-col cols="auto">
              <!-- <v-btn
            href="https://vuetifyjs.com/components/all/"
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
          >
            <v-icon
              icon="mdi-view-dashboard"
              size="large"
              start
            />

            Components
          </v-btn> -->
            </v-col>

            <v-col cols="auto">
              <!-- <v-btn
            color="primary"
            href="https://vuetifyjs.com/introduction/why-vuetify/#feature-guides"
            min-width="228"
            rel="noopener noreferrer"
            size="x-large"
            target="_blank"
            variant="flat"
          >
            <v-icon
              icon="mdi-speedometer"
              size="large"
              start
            />

            Get Started
          </v-btn> -->
            </v-col>

            <v-col cols="auto">
              <!-- <v-btn
            href="https://community.vuetifyjs.com/"
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
          >
            <v-icon
              icon="mdi-account-group"
              size="large"
              start
            />

            Community
          </v-btn> -->
            </v-col>
          </v-row>
        </v-responsive>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
//
import { ref } from 'vue';
const mdContacts = ref(false)
const vmdContacts = ref(false)
const mdGroups = ref(false)
const vmdGroups = ref(false)
const isDialogOpenMsg = ref(false)
const isDialogOpenPhn = ref(false)
const emailRules = [
  value => {
    if (value) {
      return true
    }

    return 'O e-mail é obrigatório';
  },
  value => {
    if (value.includes('@')) {
      return true;
    }

    return 'E-mail inválido'
  }
];

const msg = 'Produto'
setTimeout(() => {
  "Hello"
}, 300);
</script>

<script>
export default {
  // data: () => {
  //   return{
  //     vmdContacts: true
  //   }
  // },
  data: () => ({
    modName: '',
    modalText: '',
    drawer: false,
    group: null,
    items: [
      {
        title: 'Contactos',
        value: 'foo',
        icon: 'mdi-account',
        src: 'https://media.istockphoto.com/id/1363430976/photo/password-online-form-cyber-security-concept-image.jpg?b=1&s=612x612&w=0&k=20&c=kAepB70tUM3pNVrNv-TjyjEZQMKzh8bu8YG3d5LwSIM='
      },
      {
        title: 'Mensagens',
        value: 'foo',
        icon: 'mdi-message-text-fast',
        src: 'https://media.istockphoto.com/id/1217093906/photo/womens-hand-typing-on-mobile-smartphone-live-chat-chatting-on-application-communication.jpg?b=1&s=612x612&w=0&k=20&c=musuQuCTEcuaKrsnd1xZdCp51ToAt1qv_od0HKkQD9Q='
      },
      {
        title: 'Chamadas',
        value: 'bar',
        icon: 'mdi-phone-outgoing',
        src: 'https://media.istockphoto.com/id/1031214170/photo/emergency-and-urgency-dialing-911-on-smartphone-screen-shallow-depth-of-field.jpg?b=1&s=612x612&w=0&k=20&c=_mX-_XF6iZ6ouCre5gdhGGS0cN36Yfo56YybWVA02RU='
      },
      {
        title: 'WhatsApp',
        value: 'fizz',
        icon: 'mdi-whatsapp',
        src: 'https://images.pexels.com/photos/46924/pexels-photo-46924.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        title: 'E-mail',
        value: 'buzz',
        icon: 'mdi-email',
        src: 'https://media.istockphoto.com/id/1282799241/photo/email-marketing-concept.jpg?b=1&s=612x612&w=0&k=20&c=6k8_7LDfTCRvtXC1FWVEuA0UHAn_WlezoHriI1-Coyg='
      },
    ],
    tabMenus: [
      // { text: 'Dashboard', icon: 'mdi-view-dashboard', to: '/', descr: 'Secção de Gráficos', dialog: 'isDialogOpen' },
      { text: 'Contactos', icon: 'mdi-account', to: 'contacts', descr: 'Directório de Contactos', dialog: 'Contacts', size: '400px' },
      { text: 'Grupos', icon: 'mdi-account-group', to: 'groups', descr: 'Directório de Grupos de Contactos', dialog: 'Groups', size: '400px' },
      { text: 'Campanhas', icon: 'mdi-account-voice', to: 'campaigns', descr: 'Campanhas', dialog: 'Campaigns' },
      // { text: 'Agendamento', icon: 'mdi-account-clock', to: 'calendar', descr: 'Agendamento', dialog: 'Booking' },
      { text: 'Mensagens', icon: 'mdi-message-plus', to: 'message', descr: 'Mensagens', dialog: 'Messages' },
      { text: 'Chamadas', icon: 'mdi-phone-settings', to: 'calls', descr: 'Chamadas Automaticas', dialog: 'Chamadas' },
      { text: 'WhatsApp', icon: 'mdi-whatsapp', to: 'whatsapp', descr: 'Enviar mensagens via WhatsApp', dialog: 'WhatsApp' },
      { text: 'E-mail', icon: 'mdi-email-fast-outline', to: 'email', descr: 'E-mails', dialog: 'E-mail' },
      { text: 'Histórico', icon: 'mdi-history', to: 'history', descr: 'Acesse ao hsitóricos de operações', dialog: 'Histórico' },
      { text: 'Configurações', icon: 'mdi-cog', to: 'settings', descr: 'Configirações gerais', dialog: 'Settings' }
    ],
    dialogs: [
      {
        dialog: 'isDialogOpenMsg',
      },
      {
        dialog: 'isDialogOpenMsg',
      },
      {
        dialog: 'isDialogOpenMsg',
      },
      {
        dialog: 'isDialogOpenMsg',
      },
      {
        dialog: 'isDialogOpenMsg',
      },
      {
        dialog: 'isDialogOpenMsg',
      }
    ],
    tabs: null,
    itemr: [
      {
        title: 'Dados Pessoais',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        icon: 'mdi-information-outline',
        src: 'https://media.istockphoto.com/id/1363430976/photo/password-online-form-cyber-security-concept-image.jpg?b=1&s=612x612&w=0&k=20&c=kAepB70tUM3pNVrNv-TjyjEZQMKzh8bu8YG3d5LwSIM='
      },
      {
        title: 'Registos',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        icon: 'mdi-format-list-bulleted',
        src: 'https://media.istockphoto.com/id/1363430976/photo/password-online-form-cyber-security-concept-image.jpg?b=1&s=612x612&w=0&k=20&c=kAepB70tUM3pNVrNv-TjyjEZQMKzh8bu8YG3d5LwSIM='
      },
    ],
    selectedItem: null,
    vmdContacts: true
    // vmdGroups: false,
  }),

  watch: {
    group() {
      this.drawer = false
    },
  },
  methods: {
    openDialog: function (item) {
      console.log(item)
      // alert(item.dialog)
      this.modName = item

      if (item.dialog == 'mdContacts') {
        // this.vmdContacts = true;
        // alert(item.dialog)
        // document.getElementById('mdContacts').style.visibility = "visible";
        // document.getElementById('mdContacts').display = "block";
      }
      else {
        // vmdContacts = false
        // vmdGroups = true
      }
    },
  }
}
</script>

<style>
.v-label {
  font-size: small;
}

.v-icon {
  font-size: small;
}

.v-card-subtitle {
  font-size: small;
}

.v-btn {
  font-size: small;
}

.v-text-field {
  font-size: small;
}
</style>